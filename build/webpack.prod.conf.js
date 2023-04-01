import webpack from "webpack";
import { merge } from "webpack-merge";
import baseWebpackConfig from "./webpack.base.conf.js";
import TerserPlugin from "terser-webpack-plugin";
const test = require("yes")
const version = process.env.npm_package_version;

export default merge(baseWebpackConfig, {
  mode: "production",
  devtool: false,
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        parallel: true,
        extractComments: false,
      }),
    ],
  },
  plugins: [
    new webpack.BannerPlugin({
      banner: `SimpleLibrary v${version}`,
    }),
  ],
});
