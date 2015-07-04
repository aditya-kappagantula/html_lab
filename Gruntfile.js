module.exports = function(grunt){
	
	grunt.initConfig({

		jshint: {
			all:['js/**/*.js']
		},

		concat: {
			dist: {
				files: {
					'dist/js/all.js' : ['js/**/*.js']
				}
			}
		},

		uglify: {
		    build: {
		        src: 'dist/js/all.js',
		        dest: 'dist/js/all.min.js'
		    }
		},

		sass: {
		    dist: {
		        options: {
		            style: 'compressed'
		        },
		        files: {
		        	'dist/sass/all.scss' : 'stylesheets/sass/**/*.scss'
		        }
		    } 
		},
	
		csslint: {
			all:['stylesheets/css/**/*.css']
		},

		cssmin: {
			dist: {
				files: {
					'stylesheets/css/all.min.css' : ['stylesheets/css/**/*.css']
				}
			}
		},

		autoprefixer: {
			all: {
				src: 'dist/sass/all.min.scss'
			}
		},

		watch: {
			sass: {
				files: 'stylesheets/scss/**/*.scss',
				tasks: ['sass'],
				options: {
					spawn:false,
					livereload:true
				}
			},

			js: {
				files: ['js/**/*.js'],
				tasks: ['jshint','concat']
			},

		}

	});

	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-csslint');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-autoprefixer');
	grunt.registerTask('default',[
		'jshint',
		'concat',
		'uglify',
		'sass',
		'csslint',
		'cssmin',
		'autoprefixer',
		'watch'
	]);

}
