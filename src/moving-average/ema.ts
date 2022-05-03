import { SMA } from './sma';
import { NumberConfig } from '../types';

function EMA({ values, period, smoothing }: EMAConfig): number[] {
    const res: number[] = new Array(values.length).fill(0);
    if (period <= 0) {
        return res;
    }

    if (typeof smoothing !== 'number') {
        smoothing = 2;
    }
    const k = smoothing / (period + 1);

    for (let i = period - 1; i < values.length; ++i) {
        if (i + 1 === period) {
            const values2: number[] = new Array(i + 1);
            for (let j = 0; j <= i; ++j) {
                values2[j] = values[j];
            }

            const sma = SMA({ values: values2, period });
            res[i] = sma[sma.length - 1];
            continue;
        }

        const today = values[i];
        const EMAyesterday = res[i - 1];
        const ema = today * k + EMAyesterday * (1 - k);
        res[i] = ema;
    }

    return res;
}

interface EMAConfig extends NumberConfig {
    smoothing?: number | undefined
}

export { EMA, EMAConfig };
