const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');
module.exports = {
   mode: "production",
   entry: {
      content: path.resolve(__dirname, "..", "src", "content.ts"),
      background: path.resolve(__dirname, "..", "src", "background.ts")
   },
   output: {
      path: path.join(__dirname, "../build"),
      filename: "scripts/[name].js",
   },
   resolve: {
      extensions: [".ts", ".js"],
   },
   module: {
      rules: [
         {
            test: /\.tsx?$/,
            loader: "ts-loader",
            exclude: /node_modules/,
         },
      ],
   },
   plugins: [
      new CopyPlugin({
         patterns: [{from: ".", to: ".", context: "public"}]
      }),
   ],
};