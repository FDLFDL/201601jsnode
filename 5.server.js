var http = require("http");
//通过http的createServer方法创建一个http服务器
var server = http.createServer(function (request, response) {
    console.log(request.url);
    //如果请求的URL是 /index.html的话，
    if (request.url === "/index.html") {
        //获取fs模块
        var fs = require("fs");
        //读到文件的内容，并指定编码。
        fs.readFile("index.html", "utf8", function (err, data) {
            //当文件读取成功之后，调用回调函数，
            //把读到的文件内容写入到响应体里
            response.write(data);
            //关闭和客户端的响应了
            response.end();
        });
    } else if(request.url === "/index.css") {
        //获取fs模块
        var fs = require("fs");
        //读到文件的内容，并指定编码。
        fs.readFile("index.css", "utf8", function (err, data) {
            //当文件读取成功之后，调用回调函数，
            //把读到的文件内容写入到响应体里
            response.write(data);
            //关闭和客户端的响应了
            response.end();
        });
    }
});
server.listen(8080);