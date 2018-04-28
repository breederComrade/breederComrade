
const path = require('path');
module.exports = {
  mode:"",
  entry: {
      app:path.resolve(__dirname,'index.js'),
      search:path.resolve(__dirname,'search.js'),
  },
  output: {
    filename: 'blandle.js',
    path: path.resolve(__dirname, 'dist')
  }
};