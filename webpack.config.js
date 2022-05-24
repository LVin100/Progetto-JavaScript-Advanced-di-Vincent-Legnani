const path = require("path");
const HtmlWebpackPlugin = require ('html-webpack-plugin');
module.exports= {
   mode: "production",
    entry: "./SRC/JS/index.js",
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "dist")
    },
    module: {
        rules: [
            {
                test: /.css$/,
                use: ["style-loader", "css-loader"],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
          template: "SRC/index.html"
        }),
      ]

};