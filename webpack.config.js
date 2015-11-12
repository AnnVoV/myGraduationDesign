///执行webpack -p 得到的build文件是经过压缩的
var webpack = require('webpack'),
//利用ExtractTextPlugin 生成css 文件夹
    ExtractTextPlugin = require("extract-text-webpack-plugin"),
    path = require('path'),
    libDir = path.join(__dirname, 'public/js/comm'),
    sprite = require('css-sprite');

/* 使用图片拼接精灵 */
sprite.create({
    src: ['./public/img/sprites/*.png'],
    out: './public/img',
    name: 'sprite',
    style: './public/scss/sprite.scss',
    cssPath: '../img/',
    processor: 'scss'
}, function () {
    console.log('done');
});

module.exports = {
    context: __dirname + '/public',
    entry: {
        //要build的入口脚本
       index: './js/app.js'
    },
    output: {
        //这个output的path是相对于根目录的
        path: 'build/js',
        //这里的[name] 对应 entry 里面的键
        filename: '[name].bundle.js',
        /* 指资源文件的部署路径 我们的项目的html部署在b.alibaba-inc.com/path/to/project/index.html
         * 我们的js有可能部署在CDN上，比如b.alibaba-inc.com/assets/下
         * 那么这里的publicPath应该是'/assets'
         * 这里的publicPath 会影响css中图片引用路径
         */
        publicPath: 'http://127.0.0.1:8088/build/'
    },
    module: {
        loaders: [
            {
                //scss 文件编译并且生成css 文件块而不是直接Include到js文件里面
                test: /\.scss$/, loader: ExtractTextPlugin.extract(
                'css?sourceMap!' +
                'autoprefixer!' +
                'sass?sourceMap!'
                ,
                {
                    //我们通过在这里设置publicPath 来覆盖之前我们在output中写的publicPath
                    //我们在output 中设置的publicPath 会影响我们的hot-module的监听
                    publicPath: ''
                }
            )
            },
            {
                //css 中图片资源的src和url
                //file-loader 后面的参数会根据 ?name=[path][name].[ext]来拷贝对应的文件夹
                //这个参数后面的路径也是基于output 里面写的路径来写的
                test: /\.jpe?g$|\.gif$|\.png$|\.svg$|\.eot$|\.woff$|\.ttf$|\.wav$|\.mp3$/,
                //这个路径是基于js文件的路径去写的
                loader: "file-loader?name=../img/[name].[ext]"
            }
        ]
    },
    plugins: [
        //插件
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            filename: 'vendor.js',
            minChunks: 2
        }),
        //通过使用ExtractTextPlugin插件，就可以使得js 中require的css 独立出来
        new ExtractTextPlugin(
            '../css/[name].css',
            {
                allChunks: true
            }
        )
    ],
    devtool: "sourcemap",
    resolve: {
        extensions: ['', '.js', '.html'],
        alias: {
            jquery: libDir + '/jquery.min.js',
            angular: libDir + '/angular.js',
            angularAnimation: libDir + '/angular-animate.js',
            route: libDir + '/angular-route.js',
            bootstrap: libDir + '/bootstrap.min.js'
        }
    }
};
