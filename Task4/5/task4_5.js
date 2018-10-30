module.exports = function getAverageValue (arr) {
    return arr.reduce((p,v)=>p+v)/arr.length;
}