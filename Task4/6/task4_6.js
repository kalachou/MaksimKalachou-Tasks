function getMaxValue (arr) {

    return arr.reduce((p,v) => v>p ? p=v : p);

}