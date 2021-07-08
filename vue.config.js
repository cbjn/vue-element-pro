//加载path模块
const path = require('path')
    //定义resolve方法，把相对路径转换成绝对路径
const resolve = dir => path.join(__dirname, dir)
const port = 8088 // dev port
module.exports = {
    //基本路径
    publicPath: "./",
    //输出路径
    outputDir: "dist",
    //静态文件目录
    assetsDir: "static",
    //html输出路径
    // indexPath: "index.html",
    //文件名哈希
    filenameHashing: true,
    //不需要生产环境的 source map,设置为false
    productionSourceMap: process.env.NODE_ENV === "production" ? false : true,

    devServer: {
        port: port,
        open: false,
        overlay: {
            warnings: false,
            errors: true
        },
        hot: true, //自动保存
        proxy: { //解决跨域问题@update
            '/web/api': { //按钮菜单取本地数据
                target: 'http://127.0.0.1:8088', //这里就改成你的api路径
                changeOrigin: true,
                pathRewrite: {
                    '^/web/api': '/'
                }
            },
        },
    },

    configureWebpack: config => {
        config.resolve.alias = {
            '@': resolve('src'),
            'api': resolve('src/api'),
            'assets': resolve('src/assets'),
            'utils': resolve('src/utils')
        }
        if (process.env.NODE_ENV === "production") {
            //生成环境
        } else {
            //优化项配置
            config.optimization = {
                minimize: false
            }
            config.devtool = "source-map"
        }
    },
    chainWebpack: config => {
        // 修复HMR热更新
        config.resolve.symlinks(true);
    },
}