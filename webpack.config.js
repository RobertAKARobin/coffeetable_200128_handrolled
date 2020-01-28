const path = require('path');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const baseConfig = {
  entry: [
    './src/index.ts',
  ],
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    new CleanWebpackPlugin(),
  ],
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ],
    plugins: [
      new TsconfigPathsPlugin({
        configFile: './tsconfig.json',
      }),
    ],
  },
};

function dev(env, argv) {
  const config = {
    ...baseConfig,
    devServer: {
      compress: false,
      hot: false,
      inline: false,
      liveReload: false,
      open: false,
      port: 9000,
      publicPath: '/dist/',
      watchContentBase: false,
      writeToDisk: true
    },
    mode: 'development',
    watch: true,
  }
  return config;
}

function prod(env, argv) {
  const config = {
    ...baseConfig,
  }
  return config;
}

module.exports = function(env, argv){
  if (argv.mode === 'production') {
    return prod(...arguments);
  } else {
    return dev(...arguments);
  }
}
