import { NumberConfig } from '../types';

function RSI({ values, period }: NumberConfig): number[] {
    const res: number[] = new Array(values.length).fill(0);
    if (period <= 0 || values.length < 1) {
        return res;
    }

    const changeArr: number[] = new Array(values.length);
    changeArr[0] = 0;
    for (let i = 1; i < values.length; ++i) {
        const prevNum = values[i - 1];
        const num = values[i];
        changeArr[i] = num - prevNum;
    }

    let avgGain = 0;
    let prevAvgGain = 0;
    let avgLoss = 0;
    let prevAvgLoss = 0;

    for (let i = period; i < values.length; ++i) {
        if (i === period) {
            let sumOfGains = 0;
            let sumOfLosses = 0;
            for (let j = 0; j < i; ++j) {
                const change = changeArr[j];
                if (change > 0) {
                    sumOfGains = sumOfGains + change;
                } else {
                    sumOfLosses = sumOfLosses - change;
                }
            }
            avgGain = sumOfGains / period;
            avgLoss = sumOfLosses / period;
        } else {
            prevAvgGain = avgGain;
            prevAvgLoss = avgLoss;
            const gain = changeArr[i] > 0 ? changeArr[i] : 0;
            const loss = changeArr[i] < 0 ? -changeArr[i] : 0;
            avgGain = (prevAvgGain * (period - 1) + gain) / period;
            avgLoss = (prevAvgLoss * (period - 1) + loss) / period;
        }

        const rs = avgGain / avgLoss;
        res[i] = 100 - 100 / (1 + rs);
    }

    return res;
}

export { RSI };
