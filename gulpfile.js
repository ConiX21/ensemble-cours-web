'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');

gulp.task('sass', function () {
  return gulp.src('./conix_modules/sass/**/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(sourcemaps.write('./examples/maps'))
    .pipe(gulp.dest('./conix_modules/sass'));
});

gulp.task('cours-sass', function () {
  return gulp.src('./styles/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./styles'));
});

gulp.task('sass:watch', function () {
  gulp.watch('./conix_modules/sass/**/*.scss', ['sass']);
  gulp.watch('./styles/*.scss', ['cours-sass']);
});