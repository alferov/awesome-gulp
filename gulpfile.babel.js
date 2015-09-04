'use strict';
import gulp from 'gulp';
import gulpLoadPlugins from 'gulp-load-plugins';
import del from 'del';
import browserSync from 'browser-sync';
import { stream as wiredep } from 'wiredep';
import runSequence from 'run-sequence';

const $ = gulpLoadPlugins();
const config = {
  src: {
    root: './gh-pages/src',
    styles: './gh-pages/src/sass',
    markdown: './README.md',
    html: './gh-pages/src/index.html',
    font: './gh-pages/src/font/**/*',
    img: './gh-pages/src/img/**/*'
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

/*
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
 * Inject compiled markdown & handle html files
 */
gulp.task('html', () => {
  let markdown = gulp.src(config.src.markdown)
    .pipe($.markdown());

  const assets = $.useref.assets({searchPath: ['.', config.src.root]});

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

gulp.task('font', () => {
  return gulp.src(config.src.font)
    .pipe(gulp.dest(config.dist + '/font'));
});

gulp.task('img', () => {
  return gulp.src(config.src.img)
    .pipe(gulp.dest(config.dist + '/img'));
});

gulp.task('clean', del.bind(null, [config.dist]));

gulp.task('serve', function() {
  browserSync({
    port: config.browserSync.port,
    server: {
      baseDir: config.browserSync.baseDir,
      routes: {
        '/bower_components': 'bower_components',
        '/img': 'gh-pages/src/img'
      }
    },
    logConnections: true,
    logFileChanges: true,
    notify: true
  });
});

gulp.task('styles', () => {
  gulp.src(config.src.styles + '/custom.scss')
    .pipe($.sass())
    .pipe(gulp.dest(config.dist + '/css'));
});

gulp.task('watch', () => {
  gulp.watch([config.src.markdown, config.src.html, config.src.styles], ['html']);
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

gulp.task('build', (callback) => {
  runSequence('clean', ['styles','font', 'img', 'html'],  callback);
});

gulp.task('dev', (callback) => {
  runSequence('clean', ['styles', 'font'], [ 'html', 'serve', 'watch'], callback);
});

gulp.task('default', ['build']);
