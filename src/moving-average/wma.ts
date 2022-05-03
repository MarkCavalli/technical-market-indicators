import { NumberConfig } from '../types';

function WMA({ values, period }: NumberConfig): number[] {
    const res: number[] = new Array(values.length).fill(0);
    if (period <= 0) {
        return res;
    }

    for (let i = period - 1; i < values.length; ++i) {
        let sum = 0;
        let stepSum = 0;
        for (let j = i; j > i - period; --j) {
            const num = values[j];
            const step = j - i + period;
            sum = sum + num * step;
            stepSum = stepSum + step;
        }
        res[i] = sum / stepSum;
    }

    return res;
}

export { WMA };
