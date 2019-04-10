// new 做了什么
//1.创建一个新的空对象
//2.将构造函数中的this指向这个新空对象
//3.执行构造函数中的代码
//4.返回这个对象
//5.这个对象有一个__proto__指向构造函数原型
var promise= new Promise((resolve, reject) => {
    var flag=1;
    if(flag) return resolve()
    reject()
});
promise.then((res)=>{
    var a = "成功回调"
    console.log(a)
},(err)=>{
    var b = "失败回调"
    console.log(b)
})
// ---------------------------------
function promiseTest(){
   var promise= new Promise((resolve,reject)=>{
        var flag=true;
        if(flag) return resolve()
        reject()
    });
    return promise
};
promiseTest().then((res)=>{
    var a = "成功回调"
    console.log(a)
},(err)=>{
    var b ="失败回调"
    console.log(b)
})
//---------------------------
// ## Promise 
// 1.Promise是一个构造函数 
//  + 需要new Promise去创建一个Promise对象
//  + 在new Promise(函数) 这个函数有2个参数一个是resolve(成功的回调)
//  一个是reject(失败的回调)
//  2.promise对象上有then()同时还有一个叫 catch方法
//  + then接受2参数一个是成功的回调一个是失败的回调
//  +在then接受中的分别传递成功和失败回调函数给resolve和reject
//  3.为什么要使用Promise
//  +解决嵌套地狱问题
//  4.Promise会立即执行