import gulp from 'gulp';
import gulpLoadPlugins from 'gulp-load-plugins';
import del from 'del';
import browserSync from 'browser-sync';
import { stream as wiredep } from 'wiredep';
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
 * Add Bower dependencies to the source code automatically
 */
gulp.task('wiredep', () => {
  gulp.src(config.src.html)
    .pipe(wiredep({
      ignorePath: /^(\.\.\/)*\.\./
    }))
    .pipe(gulp.dest(config.src.root));
});

/**
 * Inject compiled markdown
 */
 gulp.task('markdown', () => {
  let markdown = gulp.src(config.src.markdown).pipe($.markdown());

  return gulp.src(config.src.html)
    .pipe($.inject(markdown, {
     transform: fileContents
    }))
    .pipe(gulp.dest(config.src.root));
 });

/**
* Assets related tasks
*/
gulp.task('html', () => {
  const assets = $.useref.assets({searchPath: ['.', config.dist]});

  return gulp.src(config.src.html)
    .pipe(assets)
    .pipe($.if('*.css', $.minifyCss()))
    .pipe(assets.restore())
    .pipe($.useref())
    .pipe(gulp.dest(config.dist))
    .pipe(browserSync.stream());
});

gulp.task('font', () => {
  return gulp.src(config.src.font)
    .pipe(gulp.dest(config.dist + '/font'));
});

gulp.task('img', () => {
  return gulp.src(config.src.img)
    .pipe(gulp.dest(config.dist + '/img'));
});

gulp.task('styles', () => {
  gulp.src(config.src.styles + '/custom.scss')
    .pipe($.sass())
    .pipe(gulp.dest(config.dist + '/css'))
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
        '/bower_components': './bower_components',
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
  gulp.watch([config.src.html, config.src.styles], ['html']);
  gulp.watch(config.src.markdown, ['markdown']);
  gulp.watch(config.src.styles + '/**/*.scss', ['styles']);
  gulp.watch('bower.json', ['wiredep']);
});

/**
 * Publish to gh-pages
 */
gulp.task('gh-pages', () => {
  return gulp.src(config.dist + '/**/*')
    .pipe($.ghPages());
});

gulp.task('deploy', (callback) => {
  runSequence('build', 'gh-pages', callback);
});

/**
 * Build tasks
 */
gulp.task('build', (callback) => {
  runSequence('clean', 'markdown', ['styles','font', 'img'], 'html',  callback);
});

gulp.task('dev', (callback) => {
  runSequence('clean', 'markdown', ['styles', 'font'], 'serve:dev', 'watch', callback);
});

/**
 * Check production-ready code before deploying it to gh-pages
 */
gulp.task('dev:dist', (callback) => {
  runSequence('build', 'serve:dist', callback);
});

gulp.task('default', ['build']);
