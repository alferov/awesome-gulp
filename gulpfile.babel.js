'use strict';
import gulp from 'gulp';
import gulpLoadPlugins from 'gulp-load-plugins';
import del from 'del';

const $ = gulpLoadPlugins();

function fileContents(filePath, file) {
  return file.contents.toString();
}

/*
 * Inject compiled markdown to index.html
 */
gulp.task('markdown', ['clean'], () => {
  let markdown = gulp.src('./README.md')
    .pipe($.markdown());

  let styles = gulp.src('./gh-pages/*.css')
    .pipe(gulp.dest('./tmp'));

  return gulp.src('./gh-pages/index.html')
    .pipe($.inject(markdown, {
      transform: fileContents
    }))
    .pipe($.inject(styles, {
      read: false,
      relative: true
    }))
    .pipe(gulp.dest('./tmp'));
});

gulp.task('clean', del.bind(null, ['./tmp']));

/*
 * Publish to gh-pages
 */
gulp.task('deploy', () => {
  return gulp.src('./tmp/**/*')
    .pipe($.ghPages());
});
