var p1 = new Promise(function (resolve) {
    setTimeout(function () {
        resolve("i am first");
    },1000);
});
var p2 = new Promise(function (resolve) {
    setTimeout(function () {
        resolve("i  am second");
    },4000);
});
Promise.all([p1, p2]).then(function (result) {
    console.log(result); //[ 'i am first', 'i  am second' ] 
});