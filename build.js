var path = require("path");
var Builder = require('systemjs-builder');

// optional constructor options
// sets the baseURL and loads the configuration file
//var builder = new Builder('path/to/baseURL', 'path/to/system/config-file.js');
var builder = new Builder({
    baseUrl: './',
    map: {
      './': {format: 'register', defaultExtension: 'js'},
      angular2: 'node_modules/angular2',
      rxjs: 'node_modules/rxjs'
    },
    meta: {
      'angular2/*': { build: false  },
      'rxjs/*': { build: false  }
    },
    packages: {
      'angular2': {
        defaultExtension: 'js',
        main: 'core.js'
      },
      'rxjs': {
        defaultExtension: 'js',
        main: 'rx.js'
      }
    }
  });
builder
.bundle('./core.js', 'dev.js')
.then(function() {
  console.log('Build complete');
})
.catch(function(err) {
  console.log('Build error');
  console.log(err);
});