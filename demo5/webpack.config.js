//webpack是用node做的，所以都是模块
let path=require('path')//获取当前目录
//cnpm install html-webpack-plugin --save-dev
let HtmlWebpackPlugin=require('html-webpack-plugin')

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
            },
            //匹配图片
            {
                test:/\.(png|jpg|gif)$/,
                loader:'url-loader',
                //图片小于8kb，base64处理
                //优点：减少请求数量
                //缺点：体积变大
                options:{
                    //8kb
                    limt:8*1024,
                    //关闭url-loader的es6解析
                    esModule:false,
                    //名字取图片hash前十位
                    //取图片拓展名
                    name:'[hash:10].[ext]'
                }
            },
            //处理html的loader
            {
                test:/.\html$/,
                loader:'html-loader',
            },
        ]
    },

    //配置plugin
    plugins:[
        new HtmlWebpackPlugin({
            template:'./index.html'
        })
    ]
}


//cnpm install style-loader css-loader --save-dev安装这两个模块

//配置打包文件后，指令直接webpack就打包了

