var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync');

var reload = browserSync.reload;

gulp.task('sass', function() {
    return gulp.src('./src/styles/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('./dist'))
        .pipe(reload({ stream:true }));
});

gulp.task('serve', function() {
    browserSync({
        server: {
          baseDir: './'
        }
    });

    gulp.watch(['*.html', './src/styles/*.scss'], ['sass'])
    
})