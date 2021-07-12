//webpack是用node做的，所以都是模块
let path=require('path')//获取当前目录
module.exports={
    //入口文件
    entry:"./src/index.js",
    //输出文件
    output:{
        //输出文件名称
        filename:"bundle.js",
        //输出路径
        //__dirname获取当前具体目录
        //当前目录下的dist
        path:path.resolve(__dirname,'dist')
    },
    //模式——生产模式
    mode:'development',
}

//配置打包文件后，指令直接webpack就打包了