const gulp = require('gulp');
const install = require('gulp-install');

gulp.task('default', ['install']);

gulp.task('install', () => {
  return gulp
    .src([
      './app/*',
      './app/src/client/*',
      './lib/*/**',
    ])
    .pipe(install({allowRoot: true}));
});