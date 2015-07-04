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
		            style: 'expanded'
		        },
		        files: {
		        	'stylesheets/css/all.css' : 'stylesheets/sass/**/*.scss',
		        	'dist/css/all.css' : 'stylesheets/sass/**/*.scss'
		        }
		    } 
		},
	
		csslint: {
			all:['stylesheets/css/all.css','dist/css/all.css']
		},

		cssmin: {
			dist: {
				files: {
					'stylesheets/css/all.min.css' : ['stylesheets/css/all.css'],
					'dist/css/all.min.css' : ['dist/css/all.css']
				}
			}
		},

		autoprefixer: {
			all: {
				src: 'dist/sass/all.min.css'
			}
		},

		open : {
			dev : {
				path: 'http://127.0.0.1:8000/',
				app: 'Google Chrome'
			},
			// build : {
			// 	path : 'http://google.com/',
			// 	app: 'Google Chrome'
			// },
			// file : {
			// 	path : '/etc/hosts'
			// },
			// custom: {
			// 	path : function () {
			// 		return grunt.option('path');
			// 	} 
			// }
		},

		watch: {
			css: {
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
	grunt.loadNpmTasks('grunt-contrib-csslint');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-autoprefixer');
	grunt.loadNpmTasks('grunt-open');
	grunt.loadNpmTasks('grunt-contrib-watch');
	
	grunt.registerTask('default',[
		'jshint',
		'concat',
		'uglify',
		'sass',
		'csslint',
		'cssmin',
		'autoprefixer',
		'open',
		'watch'
	]);

}
