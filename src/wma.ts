import { NumberConfig } from './types';

function WMA({ values, period }: NumberConfig): number[] {
    const res: number[] = [];
    for (let i = 0; i < values.length; ++i) {
        if (i + 1 < period) {
            res.push(0);
            continue;
        }

        let sum = 0;
        let stepSum = 0;
        for (let j = i; j > i - period; --j) {
            const num = values[j];
            const step = j - i + period;
            sum = sum + num * step;
            stepSum = stepSum + step;
        }
        const wma = sum / stepSum;
        res.push(wma);
    }

    return res;
}

export { WMA };
