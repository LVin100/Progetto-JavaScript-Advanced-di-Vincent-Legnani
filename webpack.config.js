const path = require("path");
module.exports= {
   mode: "development",
    entry: "./SRC/JS/index.js",
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "dist")
    },


};