function getTenLastDigits (n) {

    if ( n > 1000 || n < 1) throw Error("n not in range 1..1000");
    let sumResult = 0;
    let base, power, powerResult;
    let mod = 10000000000; //module

    for (let i = 1; i < n+1; i++) {
        base = i;
        power = i;
        powerResult = 1;

        base %= mod;
        for (let j = 1; j < power+1; j++) {
            powerResult = (powerResult * base) % mod;
        }
        sumResult += powerResult;
        sumResult %= mod;
    }
/* return String value with initial zeroes
    if (n > 9) {
        let arr = [];
        arr.fill('0');
        (sumResult+'').split('').reverse().forEach((v, i) => arr[i] = v);
        return arr.reverse().join('');
    }
    return sumResult+'';
*/
    return sumResult;
}
