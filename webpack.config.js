var webpack = require('webpack');
new webpack.ProvidePlugin({
  $: "jquery",
  jquery: "jquery",
  "window.jQuery": "jquery",
  jQuery:"jquery"
})
module.exports = {
	entry: ["./js/index.js", "./js/bootstrap.min.js"],
	output: {
		filename: "bundle.js"
	},
	module:{
		loaders: [
  {
    test: /\.css$/,
    loader: 'style-loader!css-loader'
  },
  {
    test: /\.(png|jpg)$/,
    loader: 'url-loader?limit=100000'
  },
  {
    test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
    loader: 'url-loader?limit=10000&mimetype=application/font-woff'
  },
  {
    test: /\.(ttf|otf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?|(jpg|gif)$/,
    loader: 'file-loader'
  }
]
	}
}
