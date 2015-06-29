# Awesome Gulp
> A curated list of awesome gulp plugins and resources.

Inspired by [awesome-angularjs](https://github.com/gianarb/awesome-angularjs).

*Looking for something else? Take a look at other [awesome lists](https://github.com/sindresorhus/awesome).*

## Resources
### Official
* [Documentation](https://github.com/gulpjs/gulp/tree/master/docs)
* [Recipes](https://github.com/gulpjs/gulp/tree/master/docs/recipes#recipes)
* [Articles](https://github.com/gulpjs/gulp/tree/master/docs#articles)
* [Plugin registry](http://gulpjs.com/plugins)

### Community
* [Cheatsheet](https://github.com/osscafe/gulp-cheatsheet)
* [Starter gulpfile.js](https://github.com/greypants/gulp-starter)

## Plugins
### Compilation
* [gulp-sass](https://github.com/dlmanning/gulp-sass) - Sass plugin for gulp.
* [gulp-ruby-sass](https://github.com/sindresorhus/gulp-ruby-sass) - Compiles Sass to CSS with Ruby Sass.
* [gulp-compass](https://github.com/appleboy/gulp-compass) - Compiles Sass to CSS using Compass.
* [gulp-less](https://github.com/plus3network/gulp-less) - A Less plugin for gulp.
* [gulp-stylus](https://github.com/stevelacy/gulp-stylus) - Stylus plugin for gulp.
* [gulp-coffee](https://github.com/wearefractal/gulp-coffee) - Coffeescript plugin for gulp.
* [gulp-babel](https://github.com/babel/gulp-babel) - Turn ES6 code into vanilla ES5 with no runtime required using babel.
* [gulp-traceur](https://github.com/sindresorhus/gulp-traceur) - Traceur is a JavaScript.next to JavaScript-of-today compiler.
* [gulp-typescript](https://github.com/ivogabe/gulp-typescript) - A TypeScript compiler for gulp with incremental compilation support.
* [gulp-react](https://github.com/sindresorhus/gulp-react) - Precompile Facebook React JSX templates into JavaScript.
* [gulp-angular-templatecache](https://github.com/miickel/gulp-angular-templatecache) - Concatenates and registers AngularJS templates in the $templateCache.
* [gulp-jade](https://github.com/phated/gulp-jade) - Compile Jade templates with gulp build tool.
* [gulp-handlebars](https://github.com/lazd/gulp-handlebars) - Handlebars plugin for gulp 3.
* [gulp-nunjucks](https://github.com/sindresorhus/gulp-nunjucks) - Precompile Nunjucks templates.
* [gulp-dustjs](https://github.com/sindresorhus/gulp-dust) - Precompile Dust templates.
* [gulp-riot](https://github.com/e-jigsaw/gulp-riot) - Gulp plugin for Riot.

### Concatenation
* [gulp-concat](https://github.com/wearefractal/gulp-concat) - Streaming concat middleware for gulp.

### Minification
* [gulp-minify-css](https://github.com/murphydanger/gulp-minify-css) - A gulp plugin that minifies css with clean-css.
* [gulp-csso](https://github.com/ben-eb/gulp-csso) - Minify CSS with CSSO.
* [gulp-uglify](https://github.com/terinjokes/gulp-uglify) - Minify JavaScript with UglifyJS2.
* [gulp-minify-html](https://github.com/murphydanger/gulp-minify-html) - A gulp plugin that minifies HTML with Minimize.
* [gulp-htmlmin](https://github.com/jonschlinkert/gulp-htmlmin) - Gulp plugin to minify HTML.

### Optimization
* [gulp-uncss](https://github.com/ben-eb/gulp-uncss) - Remove unused CSS selectors.
* [gulp-imagemin](https://github.com/sindresorhus/gulp-imagemin) - Minify PNG, JPEG, GIF and SVG images with imagemin.
* [gulp-base64](https://github.com/Wenqer/gulp-base64) - Gulp task for converting all data found within a stylesheet into base64-encoded data URI strings.
* [gulp-imacss](https://github.com/akoenig/gulp-imacss) - A gulp plugin for using imacss (the image to datauri to CSS transformer).
* [gulp-svg2png](https://github.com/mahnunchik/gulp-responsive) - A gulp plugin for converting SVGs to PNGs.
* [gulp-responsive](https://github.com/mahnunchik/gulp-responsive) - Generates images at different sizes.

### Injecting assets
* [gulp-useref](https://github.com/jonkemp/gulp-useref) - Parse build blocks in HTML files to replace references to non-optimized scripts or stylesheets.
* [gulp-inject](https://github.com/klei/gulp-inject) - A JavaScript, stylesheet and webcomponent injection plugin for gulp.
* [wiredep](https://github.com/taptapship/wiredep) - Wire Bower dependencies to your source code.

### Linting
* [gulp-csslint](https://www.npmjs.com/package/gulp-csslint) - CSSLint plugin for gulp.
* [gulp-htmlhint](https://github.com/bezoerb/gulp-htmlhint) - HTMLHint wrapper for gulp to validate your HTML.
* [gulp-jshint](https://github.com/spalger/gulp-jshint) - JSHint plugin for gulp.
* [gulp-jscs](https://github.com/jscs-dev/gulp-jscs) - Check JavaScript code style with jscs.
* [gulp-coffeelint](https://github.com/janraasch/gulp-coffeelint) - CoffeeLint plugin for gulp.
* [gulp-tslint](https://github.com/panuhorsmalahti/gulp-tslint) - TypeScript linter plugin for gulp.

### Live reloading
* [browser-sync](https://github.com/BrowserSync/browser-sync) - Keep multiple browsers & devices in sync when building websites ([recipes](https://github.com/BrowserSync/gulp-browser-sync)).
* [gulp-livereload](https://github.com/vohof/gulp-livereload) - Gulp plugin for livereload.

### Caching
* [gulp-changed](https://github.com/sindresorhus/gulp-changed) - Only pass through changed files.
* [gulp-cached](https://github.com/wearefractal/gulp-cached) - A simple in-memory file cache for gulp.
* [gulp-remember](https://github.com/ahaurw01/gulp-remember) - A plugin for gulp that remembers and recalls files passed through it.
* [gulp-newer](https://github.com/tschaub/gulp-newer) - Pass through newer source files only.

### Flow control
* [merge-stream](https://github.com/grncdr/merge-stream) - Merge multiple streams into one interleaved stream.
* [streamqueue](https://github.com/nfroidure/StreamQueue) - Pipe queued streams progressively.
* [run-sequence](https://github.com/OverZealous/run-sequence) - Run a series of dependent gulp tasks in order.
* [gulp-if](https://github.com/robrich/gulp-if) - Conditionally run a task.

### Logging
* [gulp-util](https://github.com/gulpjs/gulp-util) - Utilities for gulp plugins (logs using [log method](https://github.com/gulpjs/gulp-util#logmsg)).
* [gulp-notify](https://github.com/mikaelbr/gulp-notify) - Gulp plugin to send messages based on Vinyl Files or Errors using the node-notifier module.
* [gulp-size](https://github.com/sindresorhus/gulp-size) - Display the size of your project.

### Testing
* [gulp-mocha](https://github.com/sindresorhus/gulp-mocha) - Run Mocha tests.
* [gulp-jasmine](https://github.com/sindresorhus/gulp-jasmine) - Run Jasmine 2 tests in Node.js.
* [gulp-protractor](https://github.com/mllrsohn/gulp-protractor) - Gulp wrapper for protractor tests.

### Miscellaneous
* [gulp-util](https://github.com/gulpjs/gulp-util) - Utilities for gulp plugins.
* [gulp-plumber](https://github.com/floatdrop/gulp-plumber) - Prevent pipe breaking caused by errors from gulp plugins.
* [gulp-load-plugins](https://github.com/jackfranklin/gulp-load-plugins) - Automatically load in gulp plugins.
* [main-bower-files](https://github.com/ck86/main-bower-files) - Simplify build process setup by dynamically getting the library files.
* [autoprefixer](https://github.com/postcss/autoprefixer) - Parse CSS and add vendor prefixes to rules by Can I Use.
* [gulp-sourcemaps](https://github.com/floridoo/gulp-sourcemaps) - Source map support for gulp.
* [gulp-replace](https://github.com/lazd/gulp-replace) - A string replace plugin for gulp.
* [gulp-rename](https://github.com/hparra/gulp-rename) - Rename files easily.
* [gulp-rev](https://github.com/sindresorhus/gulp-rev) - Static asset revisioning by appending content hash to filenames: unicorn.css → unicorn-d41d8cd98f.css.

## License

[![CC0](http://i.creativecommons.org/p/zero/1.0/88x31.png)](http://creativecommons.org/publicdomain/zero/1.0/)

To the extent possible under law, [Philipp Alferov](https://github.com/alferov) has waived all copyright and related or neighboring rights to this work.
