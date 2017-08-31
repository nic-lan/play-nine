// See http://brunch.io for documentation.
exports.files = {
  javascripts: {
    joinTo: {
      'vendor.js': /node_modules/,
      'app.js': /^app/
    }
  },
  stylesheets: {joinTo: 'app.css'}
};

exports.plugins = {
  babel: {
    presets: ['latest', 'react'],
    plugins: [
      'transform-class-properties'
    ]
  },
  autoReload: {
    enabled: {
      css: true,
      js: true,
      assets: false
    }
  }
};
