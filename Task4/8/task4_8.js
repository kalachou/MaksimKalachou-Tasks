module.exports = function isPalindrome (arg) {
    return !arg.split("")
    .filter((x)=>x.match(/[А-яA-z]/))
    .reduce((p,v,i,a)=>{return (v.toLowerCase()==a[a.length-1-i].toLowerCase()) ? p : p+1 }, 0);
}
