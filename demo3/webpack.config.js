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
    //loader的配置
    module:{
        //配置转换规则
        //多个规则放在数组里
        rules:[
            {
                //匹配用正则
                //匹配.css的文件
                test:/\.css$/,


                //告知如何进行匹配处理
                //将css文件插入到style标签里
                use:[
                    //解析顺序是从下到上

                    //将js样式内容插入到style标签中
                    "style-loader",
                    //将css转为js
                    "css-loader",
                ]
            }
        ]
    },
}


//cnpm install style-loader css-loader --save-dev安装这两个模块

//配置打包文件后，指令直接webpack就打包了

