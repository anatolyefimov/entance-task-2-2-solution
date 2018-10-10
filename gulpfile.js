var gulp = require('gulp');
var sass = require('gulp-sass');
var jade = require('gulp-jade');
var browserSync = require('browser-sync');

var reload = browserSync.reload;

gulp.task('sass', function() {
    return gulp.src('./src/styles/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('./dist'))
        .pipe(reload({ stream:true }));
});

gulp.task('jade', function() {
    return gulp.src('./src/index.jade')
        .pipe(jade())
        .pipe(gulp.dest('./dist'))
})

gulp.task('dev',['sass', 'jade'], function() {
    browserSync({
        server: {
          baseDir: './dist'
        }
    });

    gulp.watch(['./srd/*.jade', './src/styles/*.scss'], ['sass'])
    
})