import { describe, it } from 'mocha';
import assert from 'assert';
import { EMA } from '../index';

describe('EMA', () => {
    it('return zeroes for arr with length less than period', () => {
        const values: number[] = [5.3, 6.7, 7.9];
        assert.deepEqual(EMA({ values, period: 4 }), [0, 0, 0]);
    });

    it('return arr for arr with length equal period', () => {
        const values: number[] = [53, 67, 79, 71, 52, 41];
        assert.deepEqual(EMA({ values, period: 4 }), [0, 0, 0, 67.5, 61.3, 53.17999999999999]);
        assert.deepEqual(EMA({ values, period: 2 }), [0, 60, 72.66666666666667, 71.55555555555556, 58.51851851851852, 46.839506172839506]);
    });

    it('return Nans for period 0', () => {
        const values: number[] = [5.3, 6.7, 7.9];
        assert.deepEqual(EMA({ values, period: 0 }), [NaN, NaN, NaN]);
    });

    it('test values', () => {
        const values: number[] = [3448.43277, 3447.24776, 3446.94824, 3452.04494, 3454.96177, 3453.04508, 3457.63298];
        assert.deepEqual(EMA({ values, period: 5 }), [0, 0, 0, 0, 3449.9270959999994, 3450.9664239999997, 3453.1886093333333]);
    });
});
