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
			strict: {
				src: ['stylesheets/css/all.css','dist/css/all.css']
			},
			lax: {
				options: {
					csslintrc: '.csslintrc'
				},
				src: ['stylesheets/css/all.css','dist/css/all.css']
			}
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

		connect: {
			all: {
				server: {
					options: {
						port: 8000,
						base: '/Users/AK/DEV/html_lab'
					},
					hostname: '127.0.0.1',
					keepalive: true,
					livereload: true,
				}
			}
		},

		open: {
			all: {
				path: 'http://localhost:<%= connect.all.server.options.port%>',
				app: 'Google Chrome'
			}
		},

		watch: {
			css: {
				files: 'stylesheets/sass/**/*.scss',
				tasks: ['sass'],
				options: {
					spawn:false,
					livereload:true
				}
			},

			js: {
				files: ['js/**/*.js'],
				tasks: ['jshint','concat'],
				options: {
					spawn:false,
					livereload:true
				}
			},

			html: {
	            files: ['index.html','**/*.html'],
	            options: {
	            	spawn: false,
	                livereload: true
	            }
	        }

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
	grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.loadNpmTasks('grunt-contrib-watch');
	
	grunt.registerTask('default',[
		'jshint',
		'concat',
		'uglify',
		'sass',
		'csslint:lax',
		'cssmin',
		'autoprefixer',
		'open',
		'connect',
		'watch'
	]);

}
