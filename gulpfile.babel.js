'use strict';
import gulp from 'gulp';
import gulpLoadPlugins from 'gulp-load-plugins';
import del from 'del';
import browserSync from 'browser-sync';

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

/**
 * Helpers
 */
function fileContents(filePath, file) {
  return file.contents.toString();
}

/**
 * Inject compiled markdown to index.html
 */
gulp.task('markdown', ['clean'], () => {
  let markdown = gulp.src(config.src.markdown)
    .pipe($.markdown());

  let styles = gulp.src(config.src.styles)
    .pipe(gulp.dest(config.dist));

  return gulp.src(config.src.html)
    .pipe($.inject(markdown, {
      transform: fileContents
    }))
    .pipe($.inject(styles, {
      read: false,
      relative: true
    }))
    .pipe(gulp.dest(config.dist))
    .pipe(browserSync.stream());
});

gulp.task('clean', del.bind(null, [config.dist]));

gulp.task('serve', function() {
  browserSync({
    port: config.browserSync.port,
    server: {
      baseDir: config.browserSync.baseDir,
    },
    logConnections: true,
    logFileChanges: true,
    notify: true
  });
});

gulp.task('watch', function() {
  gulp.watch([
    config.src.styles,
    config.src.markdown,
    config.src.html
  ], ['markdown']);
});

/**
 * Publish to gh-pages
 */
gulp.task('deploy', () => {
  return gulp.src('./tmp/**/*')
    .pipe($.ghPages());
});

gulp.task('default', ['markdown', 'serve', 'watch']);
