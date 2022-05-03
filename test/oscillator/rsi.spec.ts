import { describe, it } from 'mocha';
import assert from 'assert';
import { RSI } from '../../index';

describe('RSI', () => {
    it('should return empty array for empty array', () => {
        const values: number[] = [];
        assert.deepEqual(RSI({ values, period: 4 }), []);
    });

    it('should return zeroes for arr with length equal or less than period', () => {
        const values: number[] = [5.3, 6.7, 7.9];
        assert.deepEqual(RSI({ values, period: 4 }), [0, 0, 0]);
        assert.deepEqual(RSI({ values, period: 3 }), [0, 0, 0]);
    });

    it('should return arr with zeroes for period 0', () => {
        const values: number[] = [5.3, 6.7, 7.9];
        assert.deepEqual(RSI({ values, period: 0 }), [0, 0, 0]);
    });

    it('should return right values', () => {
        const values: number[] = [44.3389, 44.0902, 44.1497, 43.6124, 44.3278, 44.8264, 45.0955, 45.4245, 45.8433, 46.0826, 45.8931, 46.0328, 45.6140, 46.2820, 46.2820, 46.0028, 46.0328];
        assert.deepEqual(RSI({ values, period: 14 }), [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 70.53278948369497, 66.31856180517232, 66.54982993552764]);
    });
});
