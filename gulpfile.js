var gulp = require('gulp');
var sass = require('gulp-sass');
var jade = require('gulp-jade');
var browserSync = require('browser-sync');

var reload = browserSync.reload;

gulp.task('sass', function() {
    return gulp.src('./src/styles/main.scss')
        .pipe(sass())
        .pipe(gulp.dest('./dist'))
        .pipe(reload({ stream:true }));
});

gulp.task('jade', function() {
    return gulp.src('./src/index.jade')
        .pipe(jade())
        .pipe(gulp.dest('./dist'))
        .pipe(reload({ stream:true }));
})

gulp.task('dev',['sass', 'jade'], function() {
    browserSync({
        server: ['./dist', './assets']
    });

    gulp.watch(['./src/styles/*.scss'], ['sass']);
    gulp.watch(['./src/index.jade'], ['jade']);
    
})