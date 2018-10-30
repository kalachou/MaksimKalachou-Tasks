module.exports = function getSumFirstEvenFibonacci (n) {
    let first = 1;
    let second = 1;
    let temp;
    let list = [];

    while (list.length < n) {
        temp = first;
        first = second;
        second += temp;
        if (second%2 === 0) list.push(second);
    }
    return list.reduce((previous, value)=>previous+value);
}
