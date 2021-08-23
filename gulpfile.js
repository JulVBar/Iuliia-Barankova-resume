"use strict";

const {src, dest} = require("gulp");
const gulp = require("gulp");
const autoprefixer = require("gulp-autoprefixer");
const cssbeautify = require("gulp-cssbeautify");
const removeComments = require('gulp-strip-css-comments');
const rename = require("gulp-rename");
const cssnano = require("gulp-cssnano");



/* Paths */
const cssPath = 'css/';


const path = {
    build: {
        css:    cssPath + "/",
    },
    src: {
        css:    cssPath + "style.css",
    },
}



/* Tasks */


function css(cb) {
    return src(path.src.css, {base: cssPath + "/"})
        .pipe(autoprefixer({
            cascade: true
        }))
        .pipe(cssbeautify())
        .pipe(dest(path.build.css))
        .pipe(cssnano({
            zindex: false,
            discardComments: {
                removeAll: true
            }
        }))
        .pipe(removeComments())
        .pipe(rename({
            suffix: ".min",
            extname: ".css"
        }))
        .pipe(dest(path.build.css));

    cb();
}


const build = gulp.series(gulp.parallel(css));
const watch = gulp.parallel(build);



/* Exports Tasks */
exports.css = css;
exports.build = build;
exports.watch = watch;
exports.default = watch;
