function getArr(arr){
    if(typeof (arr)=="object"){
        if(Object.prototype.toString.call(arr).toLowerCase() == "[object object]" && !arr.length){
            return "json"
        }else if(Object.prototype.toString.call(arr).toLowerCase() == "[object array]"){
            return "array"
        }
    }else{
        return typeof (arr)
    }
}
// let arr={name:"tom",age:"18"};
// let arr=[1,2,3,4]
let arr = "string"
let result=getArr(arr);
console.log(result);