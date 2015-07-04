# Awesome Gulp
> A curated list of awesome gulp plugins and resources.

Inspired by [awesome-angularjs](https://github.com/gianarb/awesome-angularjs).

*Looking for something else? Take a look at other [awesome lists](https://github.com/sindresorhus/awesome).*

## Resources
### General Resources
* [Gulp Official Website](http://gulpjs.com/)
* [Gulp Plugin Registry](http://gulpjs.com/plugins/)
* [Gulp NPM Module](https://www.npmjs.com/package/gulp)
* [Gulp Plugin Blacklist](https://github.com/gulpjs/plugins/blob/master/src/blackList.json)

### Official Documentation
* [Getting Started](https://github.com/gulpjs/gulp/blob/master/docs/getting-started.md)
* [API documentation](https://github.com/gulpjs/gulp/blob/master/docs/API.md)
* [CLI documentation](https://github.com/gulpjs/gulp/tree/master/docs#articles)
* [Writing a plugin](https://github.com/gulpjs/gulp/blob/master/docs/writing-a-plugin/README.md)

### Community
* [Gulp StackOverflow](http://stackoverflow.com/questions/tagged/gulp)
* [Gulp Twitter](https://twitter.com/gulpjs)

### Tutorials
* [Building with Gulp](http://www.smashingmagazine.com/2014/06/11/building-with-gulp/)
* [Automate your tasks easily with Gulp.js](https://scotch.io/tutorials/automate-you-tasks-easily-with-gulp-js)
* [Gulp - The vision, history, and future of the project](https://medium.com/@contrahacks/gulp-3828e8126466)
* [Introduction to Gulp.js](http://stefanimhoff.de/tag/gulp/)
* [Learning Gulp](http://leveluptuts.com/tutorials/learning-gulp)
* [Using Gulp to inject scripts and styles tags directly into your HTML](http://blog.icanmakethiswork.io/2015/02/using-gulp-in-asp-net-instead-of-web-optimization.html)
* [5 lessons learned using Gulp.js](http://denbuzze.com/post/5-lessons-learned-using-gulpjs/)
* [Automating linkage: how I learned to stop worrying and love the build](http://lab.brightnorth.co.uk/2014/08/13/automating-linkage-how-i-learned-to-stop-worrying-and-love-the-build/)

#### Gulp with browserify
* [Gulp + browserify, the Gulp-y way](https://medium.com/@sogko/gulp-browserify-the-gulp-y-way-bb359b3f9623)
* [Gulp + browserify](http://viget.com/extend/gulp-browserify-starter-faq)
* [Fast browserify builds with watchify](https://github.com/gulpjs/gulp/blob/master/docs/recipes/fast-browserify-builds-with-watchify.md)

#### Gulp with Angular
* [What every Angular project likely needs - and a Gulp build to provide It](http://blog.jhades.org/what-every-angular-project-likely-needs-and-a-gulp-build-to-provide-it/)

#### Gulp with Angular and browserify
* [Advanced AngularJS structure with Gulp, Node and browserify](http://omarfouad.com/blog/2015/03/21/advanced-angularjs-structure-with-gulp-node-and-browserify/)

#### Gulp with React and browserify
* [Browserify and Gulp with React](https://hacks.mozilla.org/2014/08/browserify-and-gulp-with-react/)
* [Taking React to the next level: mixins, Gulp, and browserify](http://pomax.github.io/1420592591221/taking-react-to-the-next-level-mixins-gulp-and-browserify)

### Miscellaneous
* [Gulp Cheatsheet](https://github.com/osscafe/gulp-cheatsheet)

## Plugins
### Compilation
* [gulp-sass](https://github.com/dlmanning/gulp-sass) - Sass → CSS with [libsass](https://github.com/sass/libsass).
* [gulp-ruby-sass](https://github.com/sindresorhus/gulp-ruby-sass) - Sass → CSS with Ruby Sass.
* [gulp-compass](https://github.com/appleboy/gulp-compass) - Sass → CSS with Ruby Sass & Compass.
* [gulp-less](https://github.com/plus3network/gulp-less) - [Less](https://github.com/less/less.js) → CSS.
* [gulp-stylus](https://github.com/stevelacy/gulp-stylus) - [Stylus](https://github.com/stylus/stylus) → CSS.
* [gulp-postcss](https://github.com/postcss/gulp-postcss) - Pipe CSS through [PostCSS](https://github.com/postcss/postcss) processors with a single parse.
* [gulp-coffee](https://github.com/wearefractal/gulp-coffee) - [Coffeescript](https://github.com/jashkenas/coffeescript) → JavaScript.
* [gulp-typescript](https://github.com/ivogabe/gulp-typescript) - [TypeScript](https://github.com/Microsoft/TypeScript) → JavaScript.
* [gulp-react](https://github.com/sindresorhus/gulp-react) - Facebook [React](https://github.com/facebook/react) JSX templates → JavaScript.
* [gulp-angular-templatecache](https://github.com/miickel/gulp-angular-templatecache) - Concatenate and register AngularJS templates in the $templateCache.
* [gulp-jade](https://github.com/phated/gulp-jade) - [Jade](https://github.com/jadejs/jade) → HTML.
* [gulp-handlebars](https://github.com/lazd/gulp-handlebars) - [Handlebars](https://github.com/wycats/handlebars.js) templates → JavaScript.
* [gulp-nunjucks](https://github.com/sindresorhus/gulp-nunjucks) - [Nunjucks](https://github.com/mozilla/nunjucks) templates → JavaScript.
* [gulp-dustjs](https://github.com/sindresorhus/gulp-dust) - [Dust](https://github.com/linkedin/dustjs) templates → JavaScript.
* [gulp-riot](https://github.com/e-jigsaw/gulp-riot) - [Riot](https://github.com/riot/riot) templates → JavaScript.
* [gulp-markdown](https://github.com/sindresorhus/gulp-markdown) - Markdown → HTML.
* [gulp-iconfont](https://github.com/nfroidure/gulp-iconfont) - Create icon fonts from several SVG icons.

### Transpilation
* [gulp-babel](https://github.com/babel/gulp-babel) - ES6 → ES5 with [babel](https://github.com/babel/babel).
* [gulp-traceur](https://github.com/sindresorhus/gulp-traceur) - ES6 → ES5 using [Traceur](https://github.com/google/traceur-compiler).
* [gulp-regenerator](https://github.com/sindresorhus/gulp-regenerator) - ES6 → ES5 with [Regenerator](https://github.com/facebook/regenerator).
* [gulp-es6-transpiler](https://github.com/sindresorhus/gulp-es6-transpiler) - ES6 → ES5 with [es6-transpiler](https://github.com/termi/es6-transpiler).

### Concatenation
* [gulp-concat](https://github.com/wearefractal/gulp-concat) - Concatenate files.

### Minification
* [gulp-minify-css](https://github.com/murphydanger/gulp-minify-css) - Minify CSS with [clean-css](https://github.com/jakubpawlowicz/clean-css).
* [gulp-csso](https://github.com/ben-eb/gulp-csso) - Minify CSS with [CSSO](https://github.com/css/csso).
* [gulp-uglify](https://github.com/terinjokes/gulp-uglify) - Minify JavaScript with [UglifyJS2](https://github.com/mishoo/UglifyJS2).
* [gulp-htmlmin](https://github.com/jonschlinkert/gulp-htmlmin) - Minify HTML with [html-minifier](https://github.com/kangax/html-minifier).
* [gulp-minify-html](https://github.com/murphydanger/gulp-minify-html) - Minify HTML with
 [Minimize](https://github.com/Moveo/minimize).

### Optimization
* [gulp-uncss](https://github.com/ben-eb/gulp-uncss) - Remove unused CSS selectors with [UnCSS](https://github.com/giakki/uncss).
* [gulp-imagemin](https://github.com/sindresorhus/gulp-imagemin) - Minify PNG, JPEG, GIF and SVG images with [imagemin](https://github.com/imagemin/imagemin).
* [gulp-css-base64](https://github.com/zckrs/gulp-css-base64) - Transform all resources found (those within a url() declaration) in CSS files into base64-encoded data URI strings.
* [gulp-svg2png](https://github.com/akoenig/gulp-svg2png) - Convert SVGs to PNGs.
* [gulp-responsive](https://github.com/mahnunchik/gulp-responsive) - Generate images at different sizes.

### Injecting Assets
* [gulp-useref](https://github.com/jonkemp/gulp-useref) - Parse build blocks in HTML files to replace references to non-optimized scripts or stylesheets.
* [gulp-inject](https://github.com/klei/gulp-inject) - Transform each file to a string and inject each transformed string into placeholders in the target stream files.
* [wiredep](https://github.com/taptapship/wiredep) - Wire Bower dependencies to your source code.

### Linting
* [gulp-csslint](https://www.npmjs.com/package/gulp-csslint) - Automated linting of CSS with [CSSLint](https://github.com/CSSLint/csslint).
* [gulp-htmlhint](https://github.com/bezoerb/gulp-htmlhint) - [HTMLHint](https://github.com/yaniswang/HTMLHint) wrapper to validate your HTML.
* [gulp-jshint](https://github.com/spalger/gulp-jshint) - Detect errors and potential problems in JavaScript with [JSHint](https://github.com/jshint/jshint).
* [gulp-jscs](https://github.com/jscs-dev/gulp-jscs) - Check JavaScript code style with [jscs](https://github.com/jscs-dev/node-jscs).
* [gulp-coffeelint](https://github.com/janraasch/gulp-coffeelint) - A style checker that helps keep CoffeeScript code clean.
* [gulp-tslint](https://github.com/panuhorsmalahti/gulp-tslint) - TypeScript linter plugin for gulp.

### Live Reloading
* [browser-sync](https://github.com/BrowserSync/browser-sync) - Keep multiple browsers & devices in sync when building websites ([recipes](https://github.com/BrowserSync/gulp-browser-sync)).
* [gulp-livereload](https://github.com/vohof/gulp-livereload) - Gulp plugin for livereload.

### Caching
* [gulp-changed](https://github.com/sindresorhus/gulp-changed) - Only pass through changed files.
* [gulp-cached](https://github.com/wearefractal/gulp-cached) - A simple in-memory file cache for gulp.
* [gulp-remember](https://github.com/ahaurw01/gulp-remember) - A plugin for gulp that remembers and recalls files passed through it.
* [gulp-newer](https://github.com/tschaub/gulp-newer) - Pass through newer source files only.

### Flow Control
* [merge-stream](https://github.com/grncdr/merge-stream) - Merge multiple streams into one interleaved stream.
* [streamqueue](https://github.com/nfroidure/StreamQueue) - Pipe queued streams progressively.
* [run-sequence](https://github.com/OverZealous/run-sequence) - Run a series of dependent gulp tasks in order.
* [gulp-if](https://github.com/robrich/gulp-if) - Conditionally run a task.

### Logging
* [gulp-util](https://github.com/gulpjs/gulp-util) - Utilities for gulp plugins (logs using [log method](https://github.com/gulpjs/gulp-util#logmsg)).
* [gulp-notify](https://github.com/mikaelbr/gulp-notify) - Notification plugin for gulp.
* [gulp-size](https://github.com/sindresorhus/gulp-size) - Display the size of your project.
* [gulp-debug](https://github.com/sindresorhus/gulp-debug) - Debug vinyl file streams to see what files are run through your gulp pipeline.

### Testing
* [gulp-mocha](https://github.com/sindresorhus/gulp-mocha) - Run [Mocha](https://github.com/mochajs/mocha) tests.
* [gulp-jasmine](https://github.com/sindresorhus/gulp-jasmine) - Run [Jasmine 2](https://github.com/jasmine/jasmine) tests in Node.js.
* [gulp-protractor](https://github.com/mllrsohn/gulp-protractor) - Gulp wrapper for [Protractor](https://github.com/angular/protractor) tests.
* [gulp-coverage](https://github.com/dylanb/gulp-coverage) - Coverage reporting for Node.js that is independent of the test runner.

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
* [del](https://github.com/sindresorhus/del) - Delete files/folders using globs.
* [gulp-exec](https://github.com/robrich/gulp-exec) - Run a shell command.
* [gulp-strip-debug](https://github.com/sindresorhus/gulp-strip-debug) - Strip console, alert, and debugger statements from JavaScript code.

## Scaffolding
### Boilerplates
* [web-starter-kit](https://github.com/google/web-starter-kit) - Google Web Starter Kit.
* [gulp-plugin-boilerplate](https://github.com/sindresorhus/gulp-plugin-boilerplate) - Boilerplate to kickstart creating gulp plugins.
* [polymer-starter-kit](https://github.com/polymerelements/polymer-starter-kit) - A starting point for Polymer 1.0 apps.
* [este](https://github.com/este/este) - The most complete React/Flux dev stack and starter kit for isomorphic functional web apps.
* [mnml](https://github.com/mrmrs/mnml) - Minimal boilerplate to start a responsive html5/sass project.
* [kraken](https://github.com/cferdinandi/kraken) - A lightweight, mobile-first boilerplate for front-end web developers.
* [angularjs-gulp-browserify-boilerplate](https://github.com/jakemmarsh/angularjs-gulp-browserify-boilerplate) - Boilerplate using AngularJS, SASS, Gulp, and Browserify.
* [hapi-ninja](https://github.com/poeticninja/hapi-ninja) - Boilerplate Hapi server example. Node.js, Hapi, and Swig.
* [laravel-5-boilerplate](https://github.com/rappasoft/laravel-5-boilerplate) - A Laravel 5 Boilerplate Project.

### Yeoman Generators
* [generator-gulp-webapp](https://github.com/yeoman/generator-gulp-webapp) - A Gulp generator for modern webapps.
* [generator-gulp-angular](https://github.com/Swiip/generator-gulp-angular) - Yeoman generator for AngularJS with Gulp.
* [generator-react-gulp-browserify](https://github.com/randylien/generator-react-gulp-browserify) - Yeoman generator for AngularJS with Gulp.
* [generator-node-gulp](https://github.com/youngmountain/generator-node-gulp) - Create a Node.js module with yo, including gulp and Mocha unit tests.
* [generator-gulp-bootstrap](https://github.com/niallobrien/generator-gulp-bootstrap) - Yeoman generator for Bootstrap, Gulp & libsass.
* [generator-angulpify](https://github.com/jgoux/generator-angulpify) - Yeoman generator involving AngularJS, Gulp and Browserify.
* [generator-ionic-gulp](https://github.com/tmaximini/generator-ionic-gulp) - A Yeoman generator for Ionic Projects with Gulp.
* [generator-gulp-plugin-boilerplate](https://github.com/sindresorhus/generator-gulp-plugin-boilerplate) - Scaffold out a [gulp plugin boilerplate](https://github.com/sindresorhus/gulp-plugin-boilerplate).

## License
[![CC0](http://i.creativecommons.org/p/zero/1.0/88x31.png)](http://creativecommons.org/publicdomain/zero/1.0/)

To the extent possible under law, [Philipp Alferov](https://github.com/alferov) has waived all copyright and related or neighboring rights to this work.
