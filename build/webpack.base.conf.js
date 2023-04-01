import path from "path";
import fileDirName from "./file-dir-name.js";
const { __dirname } = fileDirName(import.meta);
import MiniCssExtractPlugin from "mini-css-extract-plugin";

export default {
  entry: {
    simpleLibrary: "./src/scripts/index.js",
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "../dist"),
    library: {
      name: "SimpleLibrary",
      type: "umd",
      export: "default",
    },
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].css",
    }),
  ],
};
