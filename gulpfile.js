var plumber = require('gulp-plumber'),
    less = require('gulp-less'),
    browserify = require('gulp-browserify'),
    gulp = require('gulp');

gulp.task('default', ['less', 'scripts']);

// compile less to css
gulp.task('less', function() {
    gulp.src('stylesheets/style.less')
        .pipe(plumber())
        .pipe(less())
        .pipe(gulp.dest('./build/'));
    gulp.src('stylesheets/noscript.less')
        .pipe(plumber())
        .pipe(less())
        .pipe(gulp.dest('./build/'));
});

// compile js
gulp.task('scripts', function() {
    // Single entry point to browserify
    gulp.src('client/app.js')
        .pipe(plumber())
        .pipe(browserify({
            insertGlobals: true,
            debug: !gulp.env.production
        }))
        .pipe(gulp.dest('./build/'))
});
