import gulp from 'gulp';
import gulpLoadPlugins from 'gulp-load-plugins';

const $ = gulpLoadPlugins();

gulp.task('markdown', () => {
  return gulp.src('./README.md')
    .pipe($.markdown())
    .pipe(gulp.dest('./tmp'));
});

gulp.task('deploy', () => {
  return gulp.src('./tmp/**/*')
    .pipe($.ghPages());
});
