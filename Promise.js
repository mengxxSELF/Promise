/* ��װPromise */


// һ������ �����Ǻ���
function Promise(fn){
    fn( (data)=>{
        this._success(data);
    },(error)=>{
        this._error(data);
    });
}
// then ��������ע��ɹ���ʧ�ܵĻص�����
Promise.prototype.then = function (onFull,onFail) {
    this._success = onFull; // �ѳɹ��Ļص�������promise�ڲ�
    this._error = onFail;
};
module.exports = Promise;