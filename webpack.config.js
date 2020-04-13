module.exports = {
  entry: './app/index.js', // assumes your entry point is the index.js in the root of your project folder, where your reactDom.render goes
  mode: 'development',
  output: {
    path: __dirname, // assumes your bundle.js will also be in the root of your project folder
    filename: './public/bundle.js',
  },
  devtool: 'source-maps',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      // use the style-loader/css-loader combos for anything matching the .css extension
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
};

//was recommended but was getting errors and it was not working

// module.exports = {
//   entry: './app/index.js',
//   output: {
//     path: __dirname,
//     filename: './public/bundle.js'
//   },
//   devtool: 'source-map',
//   module: {
//     rules: [
//       {
//         test: /\.jsx?$/,
//         exclude: /(node_modules|bower_components)/,
//         loader: 'babel-loader',
//         options: {
//           presets: ['react', 'es2015']
//         }
//       },
//       // use the style-loader/css-loader combos for anything matching the .css extension
//       {
//         test: /\.css$/,
//         use: [
//           'style-loader',
//           'css-loader',
//         ]
//       }
//     ]
//   }
// };
