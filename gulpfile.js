var gulp = require('gulp');
var browserify = require('browserify');
var sourcemaps = require('gulp-sourcemaps');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var gutil = require('gulp-util');

gulp.task('default', ['build.js'], function() {});

gulp.task('build.js', function () {
  var entryPoint = './client/index.js';
  var outputFileName = 'bundle.js';
  var outputDirectory = './public/js/';
  var b = browserify({
    entries: entryPoint,
    debug: true
  });

  return b.bundle()
    .pipe(source(outputFileName))
    .pipe(buffer())
    .pipe(sourcemaps.init({loadMaps: true}))
    // Add transformation tasks to the pipeline here.
    //.pipe(uglify())
    .on('error', gutil.log)
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest(outputDirectory));
});

gulp.task('watch.build', function() {
  var watchFileGlob = 'client/**/*.*';
  var taskToRun = 'build.js';

  gulp.watch([watchFileGlob], [taskToRun]);
});