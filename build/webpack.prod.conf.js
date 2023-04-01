/* eslint-disable import/extensions */
/* eslint-disable import/no-extraneous-dependencies */
import webpack from 'webpack';
import { merge } from 'webpack-merge';
import TerserPlugin from 'terser-webpack-plugin';
import baseWebpackConfig from './webpack.base.conf.js';

const version = process.env.npm_package_version;

export default merge(baseWebpackConfig, {
  mode: 'production',
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
