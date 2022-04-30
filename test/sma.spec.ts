import { describe, it } from 'mocha';
import assert from 'assert';
import { SMA } from '../index';

describe('SMA', () => {
    it('return zeroes for arr with length less than period', () => {
        const values: number[] = [5.3, 6.7, 7.9];
        assert.deepEqual(SMA({ values, period: 4 }), [0, 0, 0]);
    });

    it('return arr for arr with length equal period', () => {
        const values: number[] = [53, 67, 79, 71];
        assert.deepEqual(SMA({ values, period: 4 }), [0, 0, 0, 67.5]);
        assert.deepEqual(SMA({ values, period: 2 }), [0, 60, 73, 75]);
    });

    it('return Nans for period 0', () => {
        const values: number[] = [5.3, 6.7, 7.9];
        assert.deepEqual(SMA({ values, period: 0 }), [NaN, NaN, NaN]);
    });

    it('test values', () => {
        const values: number[] = [3448.43277, 3447.24776, 3446.94824, 3452.04494, 3454.96177];
        assert.deepEqual(SMA({ values, period: 5 }), [0, 0, 0, 0, 3449.9270959999994]);
    });
});
