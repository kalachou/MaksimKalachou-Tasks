function isPalindrom (arg) {
    return !arg.split("")
    .filter((x)=>x.match(/[А-яA-z]/))
    .reduce((p,v,i,a)=>{(v.toLowerCase()==a[a.length-1-i].toLowerCase())?p:p+1},0);
}
