const path = require('path')

module.exports = {
  preset: 'vue',
  webpack: function (config) {
    config.entry['demo'] = ['./src/static/apps/demo/app.js']
    config.entry['test'] = ['./src/static/apps/test/app.js']
    
    config.output.path = path.join(__dirname, './dist')
    return config
  },
  devServer: {
    hot: true,
    port: 8086
  }
}
