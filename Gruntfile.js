module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		paths: {
			root: './',
			src: '<%= paths.root %>src/',
			webroot: '<%= paths.root %>webroot/',
			scss: '<%= paths.src %>scss/',
			css: '<%= paths.webroot %>css/',
			ts: '<%= paths.src %>ts/',
			js: '<%= paths.webroot %>js/',
            node_modules: '<%= paths.root %>node_modules/'
		},
		shell: {
			stylesheets: {
				command: 'sass --no-source-map <%= paths.scss %>app.scss <%= paths.css %>app.css'
			},
			typescript: {
				command: 'tsc --strict --outFile <%= paths.js %>app.js <%= paths.ts %>app.ts'
			},
		},
		postcss: {
			options: {
				processors: [
					require('autoprefixer')()
				]
			},
			dist: {
				src: '<%= paths.css %>app.css'
			}
		},
		watch: {
			stylesheets: {
				files: [
					'<%= paths.scss %>*.scss',
					'<%= paths.scss %>*/*.scss',
					'<%= paths.scss %>*/*/*.scss',
					'<%= paths.scss %>*/*/*/*.scss'
				],
				tasks: ['shell:stylesheets','postcss']
			},
			typescript: {
				files: [
					'<%= paths.ts %>*.ts',
					'<%= paths.ts %>*/*.ts',
					'<%= paths.ts %>*/*/*.ts',
					'<%= paths.ts %>*/*/*/*.ts'
				],
				tasks: ['shell:typescript']
			}
		}
	});
	
	grunt.loadNpmTasks('grunt-postcss');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-shell');
	
	grunt.registerTask('build', [
		'shell:stylesheets','postcss',
		'shell:typescript'
	]);
	
	grunt.registerTask('default', [
		'build',
		'watch'
	]);
};
