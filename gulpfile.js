var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var minifycss = require('gulp-minify-css');
var rename = require('gulp-rename');

var scssSource       = 'scss/**/*.scss';
var cssDestination   = 'css';

gulp.task('styles', function() {
    return gulp.src(scssSource)
               .pipe(sass({ errLogToConsole: true }))
               .pipe(autoprefixer('last 2 versions', 'ie 9', 'ios 6', 'android 4'))
               .pipe(gulp.dest(cssDestination))
               .pipe(rename({ suffix: '.min' }))
               .pipe(minifycss())
               .pipe(gulp.dest(cssDestination));
});

gulp.task('watch', function() {
    return gulp.watch([scssSource], ['styles']);
});

gulp.task('default', ['styles']);
