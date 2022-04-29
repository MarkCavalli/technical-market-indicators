"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SMA = void 0;
function SMA(_a) {
    var arr = _a.arr, period = _a.period;
    var res = [];
    for (var i = 0; i < arr.length; ++i) {
        if (i + 1 < period) {
            res.push(0);
            continue;
        }
        var sum = 0;
        for (var j = i - period + 1; j <= i; ++j) {
            var num = arr[j];
            sum = sum + num;
        }
        res.push(sum / period);
    }
    return res;
}
exports.SMA = SMA;
