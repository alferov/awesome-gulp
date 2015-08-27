'use strict';
import gulp from 'gulp';
import gulpLoadPlugins from 'gulp-load-plugins';

const $ = gulpLoadPlugins();

function fileContents (filePath, file) {
  return file.contents.toString();
}

gulp.task('markdown', () => {
  let markdown = gulp.src('./README.md')
    .pipe($.markdown());

  return gulp
    .src('./index.html')
    .pipe($.inject(markdown, {
      transform: fileContents
    }))
    .pipe(gulp.dest('./tmp'));
});

gulp.task('deploy', () => {
  return gulp.src('./tmp/**/*')
    .pipe($.ghPages());
});
