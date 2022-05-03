import { describe, it } from 'mocha';
import assert from 'assert';
import { PercentDifference } from '../../index';

describe('PercentDifference', () => {
    it('should return 0 for zero change', () => {
        assert.strictEqual(PercentDifference(1, 1), 0);
    });

    it('should return minus values', () => {
        assert.strictEqual(PercentDifference(2, 1), -50);
        assert.strictEqual(PercentDifference(23.45, 11), -53.09168443496801);
    });

    it('should return plus values', () => {
        assert.strictEqual(PercentDifference(1, 2), 100);
        assert.strictEqual(PercentDifference(1, 23.45), 2245);
    });
});
