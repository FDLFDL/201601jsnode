
var mime = {
    types:{
        'jpg':'image/jpg',
        'gif':'image/gif',
        'css':'text/css'
    },
    //实现从文件路径到内容类型的转换
    lookup:function(path){
        /*var ext = path.slice(path.lastIndexOf('.')+1);*/
        var match = path.match(/\.(\w+)/);
        return mime.types[match[1]];
    }
}
console.log(mime.lookup('aaa.css'));
