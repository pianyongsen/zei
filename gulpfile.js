var gulp = require("gulp")
var connect = require("gulp-connect")
var watch = require("gulp-watch")
var webserver = require('gulp-webserver')
var urlTool=require("url")
var qs = require("qs") 
var data={}
/*gulp.task("httpServer",function(){
	connect.server({
		port:8080,
		livereload:true
	})
})*/

gulp.task("mockServer",function(){
    gulp.src("gulp")
    .pipe(server({
        port:8080,
        middleware:function(req,res,next){
            res.setHeader('Access-Control-Allow-Origin','*');
            res.end(data)
        }
    })) 
gulp.task("reloadPage",function(){
	gulp.src('.')
		.pipe(connect.reload());
})

gulp.task("watch",function(){
	gulp.watch("./css/css.css",['reloadPage'])
	gulp.watch("./index0.html",['reloadPage'])
})

/*gulp.task("default",["httpServer","watch","mockServer"])*/
gulp.task("default",["mockServer"])