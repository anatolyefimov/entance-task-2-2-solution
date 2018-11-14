var {series, src, dest, watch}= require('gulp');
var sass = require('gulp-sass');
var scss = require('gulp-scss')
var jade = require('gulp-jade');
var pug = require('gulp-pug')
var autoprefixer = require('gulp-autoprefixer');
var browserSync = require('browser-sync');

var reload = browserSync.reload;

function css(){
    return src('./src/styles/main.scss')
        .pipe(sass())
        .pipe(autoprefixer({
            browsers: ['last 2 versions']
        }))
        .pipe(dest('./dist'))
        .pipe(reload({ stream:true }));

};

function html() {
    return src('./src/index.jade')
        .pipe(pug())
        .pipe(dest('./dist')) 
        .pipe(reload({ stream:true }));
};

function livereload(cb) {
    browserSync({
        server: {
            baseDir:'./',
            index: './dist/index.html'
        }
    });

    watch('./src/styles/*.scss', css, function(cb) {
        reload({ stream:true })
        cb()
    });
    watch('./src/index.jade', html, function(cb) {
        reload({ stream:true })
        cb()
    });
   
} 

exports.livereload = livereload;

exports.default = series(css, html, livereload)