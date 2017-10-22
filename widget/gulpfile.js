var gulp = require("gulp");
var browserSync = require("browser-sync");

gulp.task("server", function() {
	browserSync.init({
		"server": "./",
		"port": "8686",
		"files": [
			"./**/*.html",
			"./css/*.css",
			"./script/*.js"
		]
	});
});

gulp.task("default", function() {
	gulp.start("server");
});