// Requirements
// ==================================================================
var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('default', function(){
    console.log("Hey Credera, what's up?");
    console.log("To learn more about me, visit blog.caree.codes");
    console.log("or find me on LinkedIn, Twitter, or Instagram");
    console.log("You can also reach out to me directly by emailing me at caree@caree.codes");
});

gulp.task('compile-sass', function(){
    return gulp.src('styles/*.scss')
    // TODO: sass error handling...?
    .pipe(sass())
    .pipe(gulp.dest('styles'));
});

gulp.task('watch', function(){
    gulp.watch('**/*.scss', ['compile-sass'])
});