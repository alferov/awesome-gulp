import gulp from 'gulp';
import gulpLoadPlugins from 'gulp-load-plugins';

const $ = gulpLoadPlugins();

gulp.task('markdown', () => {

  return gulp.src('./README.md')
    .pipe($.markdown())
    .pipe(gulp.dest('./tmp'));
});
