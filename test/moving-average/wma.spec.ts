import { describe, it } from 'mocha';
import assert from 'assert';
import { WMA } from '../../index';

describe('WMA', () => {
    it('should return empty array for empty array', () => {
        const values: number[] = [];
        assert.deepEqual(WMA({ values, period: 4 }), []);
    });

    it('should return zeroes for arr with length less than period', () => {
        const values: number[] = [5.3, 6.7, 7.9];
        assert.deepEqual(WMA({ values, period: 4 }), [0, 0, 0]);
    });

    it('should return arr for arr with length equal period', () => {
        const values: number[] = [53, 67, 79, 71, 52, 41];
        assert.deepEqual(WMA({ values, period: 5 }), [0, 0, 0, 0, 64.53333333333333, 56.733333333333334]);
        assert.deepEqual(WMA({ values, period: 2 }), [0, 62.333333333333336, 75, 73.66666666666667, 58.333333333333336, 44.666666666666664]);
    });

    it('should return arr with zeroes for period 0', () => {
        const values: number[] = [5.3, 6.7, 7.9];
        assert.deepEqual(WMA({ values, period: 0 }), [0, 0, 0]);
    });

    it('should return right values', () => {
        const values: number[] = [3448.43277, 3447.24776, 3446.94824, 3452.04494, 3454.96177, 3453.04508, 3457.63298];
        assert.deepEqual(WMA({ values, period: 5 }), [0, 0, 0, 0, 3451.1174413333338, 3452.1567693333336, 3454.4179099999997]);
    });
});
