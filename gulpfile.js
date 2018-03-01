var gulp          = require("gulp");
    browserSync   = require("browser-sync").create(),
    sass          = require("gulp-sass"),
    sourcemaps    = require('gulp-sourcemaps'),
    spritesmith 	= require('gulp.spritesmith'),
    gulpSequence  = require('gulp-sequence'),
    historyApi    = require('connect-history-api-fallback');


// PATHS SRC
var paths = {
    html: {
        input:  'app/**/*.html'
    },
    sass: {
        input:  'app/assets/scss/**/*.scss',
        output: 'app/assets/css',
        sprite: 'app/assets/scss/module'
    },
    sprite: {
        input:  'app/assets/img/sprite/*.*',
        output: 'app/assets/img/',
        imgName: 'sprite.png',
        cssName: '_sprite.scss',
        imgPath: '/assets/img/sprite.png' 
    },
    server: {
        input:  ['app/**/*.html', 'app/**/*.js']
    }   
};


gulp.task("serve", ["sass"], function() {
    browserSync.init({
        server: "app",
        middleware: [ historyApi() ]
    });

    gulp.watch(paths.sass.input, ["sass"]);
    gulp.watch([paths.server.input]).on("change", browserSync.reload);
});

// CSS
gulp.task("sass", function() {
    return gulp.src(paths.sass.input)
        .pipe(sourcemaps.init())
        .pipe(sass({
            outputStyle: "compressed"
        }).on("error", sass.logError))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(paths.sass.output))
        .pipe(browserSync.stream());
});

gulp.task('sprite', function () {
  
  	var spriteData = gulp.src(paths.sprite.input)

		.pipe(spritesmith({
		    imgName: paths.sprite.imgName,
		    cssName: paths.sprite.cssName,
        imgPath: paths.sprite.imgPath
  	}));

  	var imgStream = spriteData.img
    .pipe(gulp.dest(paths.sprite.output));

  	var cssStream = spriteData.css
    
    .pipe(gulp.dest(paths.sass.sprite));

  	return gulpSequence(imgStream, cssStream);
});

gulp.task("default", gulpSequence('sprite', 'serve'));
