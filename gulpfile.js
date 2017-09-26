// gulp模块
var gulp = require('gulp');
// js代码校验
// var jshint = require('gulp-jshint');
// sass模块
var sass = require('gulp-sass');
// js合并
// var concat = require('gulp-concat');
// js压缩
// var gulify = require('gulp-gulify');
// css压缩
// var minifycss = require('gulp-minify-css');
// 重命名
// var rename = require('gulp-rename');

// 检查js脚本
// gulp.task('lint', function() {
//     gulp.src('app/js/*.js')
//         .pipe(jshint())
//         .pipe(jshint.reporter('default'));
// });

// scss转译css
gulp.task('sass', function(){
    //sass()方法用于转换sass到css
  	return gulp.src('app/scss/**/*.scss')

  	// 利用gulp将sass转为css
    .pipe(sass())
    // 转换过的css存储路径
    .pipe(gulp.dest('app/css'))
});
// 实时监听
gulp.task('watch', function(){
	// 实时监听scss文件的改变并执行sass任务
	gulp.watch('app/scss/**/*.scss', ['sass']);
})

//定义默认任务 elseTask为其他任务，该示例没有定义elseTask任务
gulp.task('default',['watch']);
