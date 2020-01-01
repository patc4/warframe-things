var path = require('path');

module.exports = {
    "mode": "development",
    "entry": "./warframeStatus.js",
    "output": {
        "path": path.resolve(__dirname, 'dist'),
        "filename": "main.js"
    }
}
node: {
    __filename: true,
    __dirname; true
  }