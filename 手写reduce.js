//reduce 求和
let sum = [0,{price:100,count:1},{price:200,count:2},{price:300,count:1}].reduce((a,b) => {
    return a+b.price*b.count
});
// 以上代码等同于
let sum2 = [{price:100,count:1},{price:200,count:2},{price:300,count:1}].reduce((a,b) => {
    return a+b.price*b.count
},0);
console.log(sum2)

let keys=['name','myj'];
let values = ["age",18]
let obj = keys.reduce((memo,current,index) => {
    memo[current]=values[index];
    return memo
},{});
// 用逗号运算符简化
let obj2 = keys.reduce((memo,current,index) => (memo[current]=values[index],memo),{});
console.log(obj2)

// 手写reduce
Array.prototype.reduce = function(callback,prev){
    for(let i=0;i<this.length;i++){
        if(prev == undefined){
            prev = callback(this[i],this[i+1],i+1,this)
            i++;
        }else{
            prev = callback(prev,this[i],i,this)
        }
    }
    return prev
}
let r = [1,2,3].reduce((a,b,index,current)=>{
    return a+b
},100)
console.log(r)