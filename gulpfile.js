var gulp = require("gulp");
var sourcemaps = require("gulp-sourcemaps");
var babel = require("gulp-babel");
var concat = require("gulp-concat");
var nodemon = require('gulp-nodemon');
require('dotenv').config();

gulp.task("build", function () {
    var stream = gulp.src("src/**/*.js")
        .pipe(sourcemaps.init())
        .pipe(babel())
        .pipe(concat("all.js"))
        .pipe(sourcemaps.write("."))
        .pipe(gulp.dest("dist"));
    return stream;
});

gulp.task('serve', function (done) {
    var stream = nodemon({
        script: 'dist/all.js',
        watch: 'src',
        tasks: ['build'],
        env: {
            TOKEN: process.env.TOKEN
        },
        done
    });
    return stream;
});

