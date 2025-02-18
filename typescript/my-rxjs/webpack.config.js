const path = require('path');

module.exports = {
  entry: './index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'my-rxjs.js',
    library: {
      name: 'myRxjs',
      type: 'umd',
    }
  },
};
