var gulp = require('gulp');
var sass = require('gulp-sass');
var scss = require('gulp-scss')
var jade = require('gulp-jade');
var pug = require('gulp-pug')
var autoprefixer = require('gulp-autoprefixer');
var browserSync = require('browser-sync');

var reload = browserSync.reload;

exports.scss = function scss(){
    return gulp.src('./src/styles/main.scss')
        .pipe(sass())
        .pipe(autoprefixer({
            browsers: ['last 2 versions']
        }))
        .pipe(gulp.dest('./dist'))
        .pipe(reload({ stream:true }));
};


exports.jade = function jade() {
    return gulp.src('./src/index.jade')
        .pipe(pug())
        .pipe(gulp.dest('./dist')) 
        //.pipe(reload({ stream:true }));
};

exports.livereload = function livereload() {
    browserSync({
        server: {
            baseDir:'./',
            index: './dist/index.html'
        }
    });

    gulp.watch('./src/styles/*.scss', gulp.series(scss, reload({ stream:true })));
    gulp.watch('./src/index.jade', gulp.series(jade, reload({ stream:true })));
} 

exports.serve = gulp.series(scss, jade);