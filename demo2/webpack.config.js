let path=require('path')//获取当前目录
module.exports={
    //入口文件
    entry:"./src/index.js",
    output:{
        //输出文件
        filename:"bundle.js",
        //输出路径
        //__dirname获取当前具体目录
        //当前目录下的dist
        path:path.resolve(__dirname,'dist')
    },
    //模式
    mode:'development',
}