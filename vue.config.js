// const SpritesPlugin = require("webpack-spritesmith");
const path = require("path");
module.exports = {
    // useBuiltIns: 'usage',
    lintOnSave: false,
    // productionSourceMap:false,
    // 基本路径
    publicPath: "/",
    outputDir: path.resolve(__dirname, './bro-dist'),
    chainWebpack: config => {
        config.plugins.delete("prefetch");
        config.plugins.delete("preload");

    },
    pluginOptions: {
        ssh: {
            projectName: "blockbrowser",
        },
        "style-resources-loader": {
            preProcessor: "less",
            patterns: [
                //这个是加上自己的路径，
                //注意：试过不能使用别名路径
                // path.resolve(__dirname, "./src/assets/variable.less")
            ]
        }
    },
    configureWebpack: {
        resolve: {
            alias: {
                emoj: require("path").resolve(__dirname, "src", "assets", "css"),
                img: require("path").resolve(__dirname, "src", "assets", "img")
            }
        },
        plugins: [

        ]
    },
    css: {
        loaderOptions: {

            less: {
                javascriptEnabled: true
            }
        }
    },
    devServer: {

        proxy: "http://192.168.1.30:8080",

    }
};