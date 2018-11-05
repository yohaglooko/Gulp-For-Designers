
var gulp = require('gulp');
var autoprefixer = require('gulp_autoprefixer');


gulp.task('autoprefix', function() {
	retrun gulp.src('css/style.css')
	.pipe(autoprefixer({
		browsers: ['last 2 versions']
	}))
	.pipe(gulp.dest('css'));
});