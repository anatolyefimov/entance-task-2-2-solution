var {series, src, dest, watch, parallel}= require('gulp');
var sass = require('gulp-sass');
var pug = require('gulp-pug')
var autoprefixer = require('gulp-autoprefixer');
var browserSync = require('browser-sync');
var babel = require('gulp-babel')

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

function js() {
    return src('src/scripts/*.js')
        .pipe(dest('dist/scripts'))
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
        server: ['./dist', './assets', './src']
    });

    watch('./src/styles/*.scss', css, function(cb) {
        reload({ stream:true })
        cb()
    });
    watch('./src/index.jade', html, function(cb) {
        reload({ stream:true })
        cb()
    });
    watch('./src/scripts/*.js', js, function(cb) {
        reload({ stream:true })
        cb()
    });
   
} 

exports.livereload = livereload;

exports.default = series(parallel(css, html, js), livereload)