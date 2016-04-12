var http = require("http");
//获取fs模块
var fs = require("fs");
//通过http的createServer方法创建一个http服务器
var server = http.createServer(function (request, response) {
    //如果请求的URL是 /index.html的话，
    //读到文件的内容，并指定编码。
    //判断文件是否存在
    fs.exists(request.url.slice(1),function(exists){
        if(exists){
            fs.readFile(request.url.slice(1), "utf8", function (err, data) {
                //当文件读取成功之后，调用回调函数，
                //把读到的文件内容写入到响应体里
                response.write(data);
                //关闭和客户端的响应了
                response.end();
            });
        }else{
            response.end('404');
        }
    })

});
server.listen(8080);