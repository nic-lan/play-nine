// See http://brunch.io for documentation.
module.exports = {
  files: {
    javascripts: {
      joinTo: {
        'vendor.js': /node_modules/,
        'app.js': /^app/
      }
    },
    stylesheets: {joinTo: 'app.css'}
  },
  modules: {
    autoRequire: {
      // outputFileName : [ entryModule ]
      'test.js': ['spec/*.js']
    }
  },
  plugins: {
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
    },
    karma: {
      singleRun: true,
      browsers: ['PhantomJS'],
      frameworks: ['jasmine'],
      files: ['spec/*.js']
    }
  }
};
