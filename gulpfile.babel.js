import gulp from 'gulp';
import gulpLoadPlugins from 'gulp-load-plugins';
import del from 'del';
import browserSync from 'browser-sync';
import runSequence from 'run-sequence';

const $ = gulpLoadPlugins();
const config = {
  src: {
    root: './docs/src',
    styles: './docs/src/sass',
    markdown: './readme.md',
    html: './docs/src/index.html',
    font: './docs/src/font/**/*',
    img: './docs/src/img/**/*'
  },
  dist: './build',
  browserSync: {
    port: 3000,
    baseDir: ['./docs/src', './docs/build']
  }
};

/**
 * Helpers
 */
function fileContents(filePath, file) {
  return file.contents.toString();
}

/**
 * Inject compiled markdown
 */
gulp.task('markdown', () => {
  let markdown = gulp.src(config.src.markdown).pipe($.markdown());

  return gulp.src(config.src.html)
    .pipe($.inject(markdown, {
     transform: fileContents
    }))
    .pipe(gulp.dest(config.src.root))
    .pipe(gulp.dest(config.dist));
});

/**
* Assets related tasks
*/

gulp.task('font', () => {
  return gulp.src(config.src.font)
    .pipe(gulp.dest(`${config.dist}/font`));
});

gulp.task('img', () => {
  return gulp.src(config.src.img)
    .pipe(gulp.dest(`${config.dist}/img`));
});

gulp.task('styles', () => {
  gulp.src(`${config.src.styles}/custom.scss`)
    .pipe($.sass({
      includePaths: ['./node_modules/material-design-lite/src']
    }))
    .pipe($.minifyCss())
    .pipe(gulp.dest(`${config.dist}/css`))
    .pipe(browserSync.stream());
});

gulp.task('clean', del.bind(null, [config.dist]));

/**
 * Serve assets
 */
gulp.task('serve:dev', () => {
  browserSync({
    port: config.browserSync.port,
    server: {
      baseDir: config.browserSync.baseDir,
      routes: {
        '/img': './docs/src/img',
        '/css': './build/css',
        '/font': './build/font'
      }
    },
    logConnections: true,
    logFileChanges: true,
    notify: true
  });
});

gulp.task('serve:dist', () => {
  browserSync({
    port: config.browserSync.port,
    server: {
      baseDir: ['./build']
    },
    logConnections: true,
    logFileChanges: true,
    notify: true
  });
});

gulp.task('watch', () => {
  gulp.watch(config.src.markdown, ['markdown']);
  gulp.watch(`${config.src.styles}/**/*.scss`, ['styles']);
});

/**
 * Publish to gh-pages
 */
gulp.task('gh-pages', () => {
  return gulp.src(`${config.dist}/**/*`)
    .pipe($.ghPages());
});

gulp.task('deploy', cb => {
  runSequence('build', 'gh-pages', cb);
});

/**
 * Build tasks
 */
gulp.task('build', cb => {
  runSequence('clean', 'markdown', ['styles','font', 'img'],  cb);
});

gulp.task('dev', cb => {
  runSequence('clean', 'markdown', ['styles', 'font'], 'serve:dev', 'watch', cb);
});

/**
 * Check production-ready code before deploying it to gh-pages
 */
gulp.task('dev:dist', cb => {
  runSequence('build', 'serve:dist', cb);
});

gulp.task('default', ['build']);
