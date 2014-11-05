var plumber = require('gulp-plumber'),
    less = require('gulp-less'),
    gulp = require('gulp');

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
