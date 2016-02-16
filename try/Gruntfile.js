module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    open: {
       dev : {
            path: 'testChat.html',
            app: 'Google Chrome'
          },
      }
    });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-open');

  // Default task(s).
  grunt.registerTask('default', ['open']);

};


// grunt.initConfig({
//   open : {
//     dev : {
//       path: 'http://127.0.0.1:8888/src',
//       app: 'Google Chrome'
//     },
//     build : {
//       path : 'http://google.com/',
//       app: 'Firefox'
//     },
//     file : {
//       path : '/etc/hosts'
//     },
//     custom: {
//       path : function () {
//         return grunt.option('path');
//       } 
//     }
//   }
// })

// grunt.loadNpmTasks('grunt-open');