var gulp = require('gulp');
var eslint = require('gulp-eslint');

gulp.task('default', function() {
  return gulp
    .src('bower_components/bourbon/app/assets/stylesheets/_bourbon.scss')
    .pipe(gulp.dest('_sass/lib/bourbon'));
});

gulp.task('lint', function() {
  return gulp.src('gulpfile.js')
    .pipe(eslint({"useEslintrc": true}))
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
});
