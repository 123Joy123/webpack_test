# webpack_test学习笔记

## 基本组成

* 入口

* 输出

* loader：webpack本身只支持js和json，其他需要转换

* 插件（plugin）：增强型模块
* 模式（mode）：开发环境development、生产环境producion、none

## 文件

webpack.config.js-------------webpack配置文件

## 指令

| 指令                                                         | 解释                                               |
| ------------------------------------------------------------ | -------------------------------------------------- |
| `npm init -y`                                                | 生成一个package.json文件，-y是默认                 |
| `cnpm install webpack webpack-cli --save-dev`                | 本地安装webpack依赖，-dev是开发模式                |
| `webpack ./src/index.js -o ./dist/bundle.js --mode=development` | 开发环境打包，入口文件，-o后面是输出文件，开发模式 |
| `webpack ./src/index.js -o <br/>./dist/production --mode=production` | 生产环境打包                                       |
| `webpack`                                                    | 配置webpack.config.js文件后直接就能打包            |
