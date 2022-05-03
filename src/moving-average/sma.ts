import { NumberConfig } from '../types';

function SMA({ values, period }: NumberConfig): number[] {
    const res: number[] = new Array(values.length).fill(0);
    if (period <= 0) {
        return res;
    }
    for (let i = period - 1; i < values.length; ++i) {
        let sum = 0;
        for (let j = i - period + 1; j <= i; ++j) {
            const num = values[j];
            sum = sum + num;
        }
        res[i] = sum / period;
    }

    return res;
}

export { SMA };
