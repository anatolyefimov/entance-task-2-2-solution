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
        .pipe(jade({
            pretty: true
          }))
        .pipe(gulp.dest('./dist')) 
        .pipe(reload({ stream:true }));
})

gulp.task('build', ['sass', 'jade']);

gulp.task('serve', ['build'], function() {
    browserSync({
        server: {
            baseDir:'./',
            index: './dist/index.html'
        }
    });

    gulp.watch(['./src/styles/*.scss'], ['sass'], reload({ stream:true }));
    gulp.watch(['./src/index.jade'], ['jade'], reload({ stream:true }));
} )