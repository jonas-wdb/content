var gulp = require('gulp');
var markdown = require('gulp-markdown-it');
var header = require('gulp-header');
var footer = require('gulp-footer');

markdown.html = true;

gulp.task('markdown', function() {
    const config = {
        options: {
          html: true,
        //   linkify: true,
        //   typographer: true
        }
      };
    return gulp.src('**/*.md')
        .pipe(markdown(config))
        .pipe(header('\ufeff' + '<!DOCTYPE html><html><head><title></title><link type="text/css" rel="stylesheet" href="./markdown.css"></head><body>'))
        .pipe(footer('</body></html>'))
        .pipe(gulp.dest(function(f) {
            return f.base;
        }));
});

gulp.task('default', ['markdown'], function() {
    gulp.watch('**/*.md', ['markdown']);
});