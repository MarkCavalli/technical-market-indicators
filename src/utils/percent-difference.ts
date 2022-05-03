function PercentDifference(num1: number, num2: number): number {
    const diffCash = num2 - num1;
    const percent = diffCash / num1 * 100;
    return percent;
}

export { PercentDifference };
