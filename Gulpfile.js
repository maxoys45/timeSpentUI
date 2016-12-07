var gulp = require('gulp'),
    sass = require('gulp-sass');

var paths = {
    scss: './sass/**/*.scss',
    css: './css/'
};

gulp.task('styles', function () {
    return gulp.src(paths.scss)
        .pipe(sass({
            outputStyle: 'compressed'
        }).on('error', sass.logError))
        .pipe(gulp.dest(paths.css));
});

// Watch task
gulp.task('default',function() {
    gulp.watch(paths.scss,['styles']);
});