module.exports = function getSumDigits (arg){
    
return (arg+"").split("").map((x)=> +x).reduce((x,y)=>x+y);

}