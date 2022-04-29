"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mocha_1 = require("mocha");
var assert_1 = __importDefault(require("assert"));
var index_1 = require("../index");
(0, mocha_1.describe)('SMA', function () {
    (0, mocha_1.it)('return zeroes for arr with length less than period', function () {
        var arr = [5.3, 6.7, 7.9];
        assert_1.default.deepEqual((0, index_1.SMA)({ arr: arr, period: 4 }), [0, 0, 0]);
    });
    (0, mocha_1.it)('return arr for arr with length equal period', function () {
        var arr = [53, 67, 79, 71];
        assert_1.default.deepEqual((0, index_1.SMA)({ arr: arr, period: 4 }), [0, 0, 0, 67.5]);
        assert_1.default.deepEqual((0, index_1.SMA)({ arr: arr, period: 2 }), [0, 60, 73, 75]);
    });
    (0, mocha_1.it)('return Nans for period 0', function () {
        var arr = [5.3, 6.7, 7.9];
        assert_1.default.deepEqual((0, index_1.SMA)({ arr: arr, period: 0 }), [NaN, NaN, NaN]);
    });
    (0, mocha_1.it)('test values', function () {
        var arr = [3448.43277, 3447.24776, 3446.94824, 3452.04494, 3454.96177];
        assert_1.default.deepEqual((0, index_1.SMA)({ arr: arr, period: 5 }), [0, 0, 0, 0, 3449.9270959999994]);
    });
});
