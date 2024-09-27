module.exports = function(grunt) {

    grunt.initConfig({
        less: {
            development: {
                files: {
                    "./src/css/main.css": "./src/less/main.less"
                }
            }
        },
        watch: {
            styles: {
                files: ["./src/less/**/*.less"],
                tasks: ["less"],
                options: {
                    nospawn: true
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['less', 'watch']);
};
