const webpack = require('webpack');
const path = require('path');
const clone = require('js.clone');
const webpackMerge = require('webpack-merge');

let commonPlugins = [
  new webpack.ContextReplacementPlugin(
    // The (\\|\/) piece accounts for path separators in *nix and Windows
    /angular(\\|\/)core(\\|\/)src(\\|\/)linker/,
    root('./src'),
    {
      // your Angular Async Route paths relative to this root directory
    }
  ),

  // Loader options
  new webpack.LoaderOptionsPlugin({

  }),

];
let commonConfig = {
  // https://webpack.github.io/docs/configuration.html#devtool
  devtool: 'source-map',
  resolve: {
    extensions: ['.ts', '.js', '.json'],
    modules: [ root('node_modules') ]
  },
  context: __dirname,
  output: {
    publicPath: '',
    filename: '[name].bundle.js'
  },
  module: {
    rules: [
      // TypeScript
      { test: /\.ts$/,   use: ['awesome-typescript-loader', 'angular2-template-loader'] },
      { test: /\.html$/, use: 'raw-loader' },
      { test: /\.css$/,  use: 'raw-loader' },
      { test: /\.json$/, use: 'json-loader' }
    ],
  },
  plugins: [
    // Use commonPlugins.
  ]

};


// Server.
let serverPlugins = [

];
let serverConfig = {
  target: 'node',
  entry: '../src/server-http1', // use the entry file of the node server if everything is ts rather than es5
  output: {
    filename: 'server.js',
    path: root('../dist/server'),
    libraryTarget: 'commonjs2'
  },
  module: {
    rules: [
      { test: /@angular(\\|\/)material/, use: "imports-loader?window=>global" }
    ],
  },
  externals: includeClientPackages(
    /@angularclass|@angular|angular2-|ng2-|ng-|@ng-|angular-|@ngrx|ngrx-|@angular2|ionic|@ionic|-angular2|-ng2|-ng/
  ),
  node: {
    global: true,
    crypto: true,
    __dirname: true,
    __filename: true,
    process: true,
    Buffer: true
  }
};

module.exports = webpackMerge(clone(commonConfig), serverConfig, { plugins: serverPlugins.concat(commonPlugins) });




// Helpers
function includeClientPackages(packages, localModule) {
  return function(context, request, cb) {
    if (localModule instanceof RegExp && localModule.test(request)) {
      return cb();
    }
    if (packages instanceof RegExp && packages.test(request)) {
      return cb();
    }
    if (Array.isArray(packages) && packages.indexOf(request) !== -1) {
      return cb();
    }
    if (!path.isAbsolute(request) && request.charAt(0) !== '.') {
      return cb(null, 'commonjs ' + request);
    }
    return cb();
  };
}

function root(args) {
  args = Array.prototype.slice.call(arguments, 0);
  return path.join.apply(path, [__dirname].concat(args));
}
