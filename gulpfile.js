var gulp = require('gulp');
var sass = require('gulp-sass');
var livereload = require('gulp-livereload');


gulp.task('sass', function(){
  return gulp.src('./sass/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('./css'))
    .pipe(livereload());
});

gulp.task('watch', function(){
  livereload.listen();
  gulp.watch('./sass/*.scss', ['sass']);
});


gulp.task('default',['sass','watch']);
