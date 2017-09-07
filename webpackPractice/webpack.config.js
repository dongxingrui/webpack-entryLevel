//在命令行中使用npm start就可以执行其对于的命令，如果对应的此脚本名称不是start，想要运行时，需要这样用npm run {script name}如npm run build

const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	//使用eval打包源文件模块，在同一个文件中生成干净的完整的source map。这个选项可以在不影响构建速度的前提下生成完整的sourcemap，但是对打包后输出的JS文件的执行具有性能和安全的隐患。在开发阶段这是一个非常好的选项，在生产阶段则一定不要启用这个选项
	devtool: 'eval-source-map',//自动编译并未生效
	//__dirname 是node.js中的一个全局变量,它指向当前执行脚本所在的目录
	entry: __dirname + "/app/main.js",//唯一入口文件
	output: {
		path: __dirname + "/build",//打包后的文件存放的地方
		filename: "bundle.js"//打包后输出文件的文件名
	},
	//监听代码的修改，并自动刷新显示修改后的结果
	devServer: {
		contentBase: "./public",//本地服务器所加载的页面所在的目录
		port: "8080",//设置默认监听端口，如果省略，默认为"8080"
		historyApiFallback: true,//不跳转
		inline: true,//实时刷新
		hot: true
	},
	module: {
		rules:[
			{
				test: /(\.jsx|\.js)$/,
				use: {
	                loader: "babel-loader"/*,
	                    options: {
	                        presets: [
	                            "es2015", "react"
	                        ]
	                    }*/
				},
				exclude: /node_modules/
			},
			{
				test: /\.css$/,
				use: [
					{
						loader: "style-loader"//注意对同一个文件引入多个loader的方法
					},
					{
						loader: "css-loader",
						options: {
							modules: true
						}
					},
					{
						loader: "postcss-loader"//并未发现css中任何关于前缀的变化
					}
				]
			}
		]
	},
	//plugins是数组
	plugins: [
		new webpack.BannerPlugin('版权所有，翻版必究'),
		new HtmlWebpackPlugin({
			template: __dirname + "/app/index.tmpl.html"//new 一个这个插件的实例，并传入相关的参数
		}),
		new webpack.HotModuleReplacementPlugin()//热加载插件	并未生效
	]
}