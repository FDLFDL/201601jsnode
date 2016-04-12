//获取FS模块，file system文件系统
//
var fs = require('fs');
//以同步的方式读取文件
//同步就是步调一致，代码的执行顺序和排列任务是一致的
//前面的代码没有执行完，后面的代码不能执行必须等待前面的代码执行完了再才能执行后面的代码。
// Sync 代表同步 不加Sync 代表异步
/*
var content = fs.readFileSync('1.txt','utf8');
console.log(content);
*/
/**
 * 先执行a
 * 然后执行读取文件1.txt的操作,并不等待文件读取完成
 * 会马上执行后面的代码
 */
console.log('a');
//当文件没有读取完成之后会立刻执行后面的代码，并不会等待当前代码执行完毕
// error用来放错误原因，如果说读取文件出错了，会把错误原因放在err对象中
// data 是指读到的文件内容
fs.readFile('1.txt','utf8',function(err,data){
    console.log(data);
});
//
console.log('c');