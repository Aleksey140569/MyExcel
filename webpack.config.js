const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');

module.exports = (env, argv) => {
  const isProd = argv.mode === 'production';
  const isDev = !isProd;


  const filename = (ext) => isProd ? `[name].[contenthash].bundle.${ext}` :
  `[name].bundle.${ext}`;

  const plugins = () => {
    const base = [
      new HtmlWebpackPlugin({
        template: './index.html'
      }),
      new CopyPlugin({
        patterns: [
          {
            from: path.resolve(__dirname, 'src', 'favicon.ico'),
            to: path.resolve(__dirname, 'dist'),
          },
          {
            from: path.resolve(__dirname, 'src/fonts'),
            to: path.resolve(__dirname, 'dist/assets/fonts'),
          },
        ],
      }),
      new MiniCssExtractPlugin({
        filename: filename('css')
      }),
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify(argv.mode)
      })
    ]

    if (isDev) {
      base.push(new ESLintPlugin());
    }

    return base;
  }

  return {
    context: path.resolve(__dirname, 'src'),
    entry: {
      main:
        './index.js'
    },
    output: {
      path: path.resolve(__dirname, 'dist'),
      assetModuleFilename: 'assets/fonts/[hash][ext][query]',
      filename: filename('js'),
      clean: true
    },
    resolve: {
      extensions: [
        '.js'
      ],
      alias: {
        '@': path.resolve(__dirname, 'src'),
        '@core': path.resolve(__dirname, 'src/core'),
      }
    },
    plugins: plugins(),
    devServer: {
      port: '3000',
      open: true,
      hot: true,
      watchFiles: './'
    },
    devtool: isDev ? 'source-map' : false,
    module: {
      rules: [
        {
          test: /\.s[ac]ss$/i,
          use: [
            MiniCssExtractPlugin.loader,
            'css-loader',
            'sass-loader',
          ],
        },
        {
          test: /\.m?js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
              plugins: ['@babel/plugin-transform-class-properties']
            }
          },
        },
        {
          test: /\.(woff|woff2|eot|ttf|otf)$/i,
          type: 'asset/resource',
        },
      ],
    }
  }
};
