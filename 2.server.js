/**
 * 1. 能让别人找到你 服务器需要提供IP地址
 *                 提供一个端口号 用来区分不同的程序
 *                 一个端口号在同一时间内只能被一个程序占用
 * 2. 能够根据客户端的要求提供客户端需要的服务
 */
//需要 请求
// http模块可以帮助我们创建一个http服务器
// require用来加载一个模块把返回值赋给http
var http = require('http');

//每当有请求到来的时候就会执行监听的函数
// request 代表客户端的请求对象
// response 代表服务器端的响应对象
var server = http.createServer(function(request,response){
    //url就是请求行中的URL
    console.log(request.url);
    //输出请求中的方法
    console.log(request.method);
    //设置响应体的类型和编码
    response.setHeader('Content-Type','text/html;charset=utf-8');//设置响应体的类型
    response.write(new Date().toString());//向客户端写入当前的时间
    response.end();
    console.log('输出控制台');
    // EADDRESSINUSE E=Error  ADDRESS IN USE 端口号已经被使用了
});

//可以监听客户端的请求，启动服务器
//通过指定IP和端口来启动一个服务器
server.listen(8080);

