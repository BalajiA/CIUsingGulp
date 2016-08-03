var gulp=require('gulp');
var webserver=require('gulp-webserver');

gulp.task('webserver',function(){
	gulp.src("app")
	.pipe(webserver({
		livereload:{enable:true},
		directorylisting:true,
		open:true,
		fallback:'index.html'
	}))
})

gulp.task('stopserver',function(){
	var stream=gulp.src("app").pipe(webserver());
	stream.emit("kill");
})