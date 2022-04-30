import { NumberConfig } from './types';

function SMA({ values, period }: NumberConfig): number[] {
    const res: number[] = [];
    for (let i = 0; i < values.length; ++i) {
        if (i + 1 < period) {
            res.push(0);
            continue;
        }

        let sum = 0;
        for (let j = i - period + 1; j <= i; ++j) {
            const num = values[j];
            sum = sum + num;
        }
        res.push(sum / period);
    }

    return res;
}

export { SMA };
