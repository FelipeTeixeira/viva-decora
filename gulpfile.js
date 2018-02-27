var gulp            = require("gulp");
var browserSync     = require("browser-sync").create();
var sass            = require("gulp-sass");
var sourcemaps      = require('gulp-sourcemaps');
var spritesmith 	= require('gulp.spritesmith');
var gulpSequence    = require('gulp-sequence')

gulp.task("serve", ["sass"], function() {
    browserSync.init({
        server: "./app"
    });

    gulp.watch("./app/assets/scss/**/*.scss", ["sass"]);
    gulp.watch(['app/**/*.html', './app/**/*.js']).on("change", browserSync.reload);
});

// CSS
gulp.task("sass", function() {
    return gulp.src("./app/assets/scss/**/*.scss")
        .pipe(sourcemaps.init())
        .pipe(sass({
            outputStyle: "compressed"
        }).on("error", sass.logError))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest("./app/assets/css"))
        .pipe(browserSync.stream());
});

gulp.task('sprite', function () {
  
  	var spriteData = gulp.src('./app/assets/img/sprite/*.*')
  		.pipe(spritesmith({
		imgName: 'sprite.png',
		cssName: '_sprite.scss',
    	imgPath: '/assets/img/sprite.png' 
  	}));

  	var imgStream = spriteData.img
    .pipe(gulp.dest('./app/assets/img/'));

  	var cssStream = spriteData.css
    
    .pipe(gulp.dest('./app/assets/scss/module'));

  	return gulpSequence(imgStream, cssStream);
});

gulp.task("default", gulpSequence('sprite', 'serve'));
