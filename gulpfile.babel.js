'use strict';
import gulp from 'gulp';
import gulpLoadPlugins from 'gulp-load-plugins';
import del from 'del';

const $ = gulpLoadPlugins();
const config = {
  src: {
    styles: './gh-pages/*.css',
    markdown: './README.md',
    html: './gh-pages/index.html'
  },
  dist: './tmp',
  browserSync: {
    port: 3000,
    baseDir: './tmp'
  }
};

/*
* Helpers
*/

function fileContents(filePath, file) {
  return file.contents.toString();
}

/*
* Inject compiled markdown to index.html
*/

gulp.task('markdown', ['clean'], () => {
  let markdown = gulp.src(config.src.markdown)
    .pipe($.markdown());

  let styles = gulp.src(config.src.styles)
    .pipe(gulp.dest(config.dist));

  return gulp.src(config.src.styles.html)
    .pipe($.inject(markdown, {
      transform: fileContents
    }))
    .pipe($.inject(styles, {
      read: false,
      relative: true
    }))
    .pipe(gulp.dest(config.dist));
});

gulp.task('clean', del.bind(null, [config.dist]));

/*
* Publish to gh-pages
*/

gulp.task('deploy', () => {
  return gulp.src('./tmp/**/*')
    .pipe($.ghPages());
});
