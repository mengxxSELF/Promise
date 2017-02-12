/* 封装Promise */


// 一个参数 类型是函数
function Promise(fn){
    fn( (data)=>{
        this._success(data);
    },(error)=>{
        this._error(data);
    });
}
// then 方法用于注册成功和失败的回调函数
Promise.prototype.then = function (onFull,onFail) {
    this._success = onFull; // 把成功的回调保存在promise内部
    this._error = onFail;
};
module.exports = Promise;