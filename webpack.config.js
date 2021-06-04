// var path = require('path');
// var src_dir = path.join(__dirname, '/client/src');
// var dist_dir = path.join(__dirname, '/client/dist');

// module.exports = {
//   entry: `${src_dir}/index.jsx`,
//   output: {
//     filename: 'bundle.js',
//     path: dist_dir
//   },
//   mode: 'development',
//   watch: true,
//   module: {
//     rules : [
//       {
//         test: /\.(js|jsx)$/,
//         include: src_dir,
//         exclue: /node_modules/,
//         use : [{
//           loader: 'babel-loader',
//           options : {
//             presets : [
//               ['@bable/preset-env', {
//                 'targets': 'defaults'
//               }],
//               '@babel/preset-react'
//             ]
//           }
//         }]
//       }
//     ]
// }