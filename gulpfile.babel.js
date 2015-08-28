'use strict';
import gulp from 'gulp';
import gulpLoadPlugins from 'gulp-load-plugins';
import del from 'del';
import browserSync from 'browser-sync';

const $ = gulpLoadPlugins();
const config = {
  src: {
    styles: './gh-pages/src/css/*.css',
    markdown: './README.md',
    html: './gh-pages/src/index.html'
  },
  dist: './gh-pages/build',
  browserSync: {
    port: 3000,
    baseDir: './gh-pages/build'
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

  let assets = $.useref.assets();

  return gulp.src(config.src.html)
    .pipe(assets)
    .pipe($.if('*.css', $.minifyCss()))
    .pipe(assets.restore())
    .pipe($.useref())
    .pipe($.inject(markdown, {
      transform: fileContents
    }))
    .pipe(gulp.dest(config.dist))
    .pipe($.if(browserSync.active, browserSync.stream()));
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
  return gulp.src(config.dist + '/**/*')
    .pipe($.ghPages());
});

gulp.task('default', ['markdown', 'serve', 'watch']);
