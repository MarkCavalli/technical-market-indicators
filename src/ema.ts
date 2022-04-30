import { SMA } from './sma';
import { NumberConfig } from './types';

function EMA({ values, period, smoothing }: EMAConfig): number[] {
    const res: number[] = [];
    if (typeof smoothing !== 'number') {
        smoothing = 2;
    }
    const k = smoothing / (period + 1);

    for (let i = 0; i < values.length; ++i) {
        if (i + 1 < period) {
            res.push(0);
            continue;
        }

        if (i + 1 === period) {
            const values2: number[] = [];
            for (let j = 0; j <= i; ++j) {
                values2.push(values[j]);
            }

            const sma = SMA({ values: values2, period });
            res.push(sma[sma.length - 1]);
            continue;
        }

        const today = values[i];
        const EMAyesterday = res[i - 1];
        const ema = today * k + EMAyesterday * (1 - k);
        res.push(ema);
    }

    return res;
}

interface EMAConfig extends NumberConfig {
    smoothing?: number | undefined
}

export { EMA, EMAConfig };
