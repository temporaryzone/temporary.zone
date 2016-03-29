// kirby cms config - 19. 2. 2016


var gulp = require('gulp');
var autoprefixer = require('autoprefixer');
// var watch = require('gulp-watch');
var browserSync = require('browser-sync');
var connect = require('gulp-connect-php');
var reload = browserSync.reload;
var cssnano = require('cssnano');
var postcss = require('gulp-postcss');
var cssnext = require("postcss-cssnext");
var cssimport = require('postcss-import');
var lost = require('lost');
var doiuse = require('doiuse');
var precss = require('precss');
var print = require('gulp-print');
 var rename = require("gulp-rename");
var reporter = require("postcss-reporter");
var plumber = require("gulp-plumber");
var gutil = require('gulp-util');
var notify = require("gulp-notify");

// CONFIG
var siteroot = 'website';
var devroot = '';
var themename = 'temporary';
var themeroot = siteroot + '/user/themes/' + themename;
var processors = [
		cssimport(),
        precss(),
        lost(),
        cssnext({browsers: ['last 1 version']}),
        reporter() 
    ];
var miniprocessors = [
		cssimport(),
        precss(),
        lost(),
        cssnext({browsers: ['last 1 version']}),
        cssnano,
        reporter()
    ];



var _gulpsrc = gulp.src;
gulp.src = function() {
    return _gulpsrc.apply(gulp, arguments)
    .pipe(plumber({
        errorHandler: function(err) {
            notify.onError({
                title:    "Gulp Error",
                message:  "Error: <%= error.message %>",
                sound:    "Bottle"
            })(err);
            this.emit('end');
        }
    }));
};

// funkce co se pousti kdyz je eror v kompilaci gutil.beep() je zvuk, kdyztak vykomentovat
var onError = function (err) {  
  gutil.beep();
  console.log(err);
};


gulp.task('browser-sync', function() {
    browserSync({
      proxy: '127.0.0.1:8020',
      port: 8080,
      open: true,
      browser: "google chrome canary",
      notify: false
    }, function (err, bs) {
    	 if (err) { console.log(err); }
		    if (!err) {
		        console.log("BrowserSync is ready!");
		    }
	});
});


gulp.task('bs-reload', function() {
	reload();
});


gulp.task('connect', function(cb) {
    connect.server({ base: siteroot, port: 8020, stdio: 'ignore'}, 
    function() {
    	console.log('PHP server initialized, starting BrowserSync');
    	cb();
    });
});

gulp.task('css', function () {
    return gulp.src(themeroot + '/dev_css/style.css')
        .pipe(postcss(processors))
        .pipe(gulp.dest(themeroot + '/css'))
        .pipe(reload({stream:true}));
});


gulp.task('minicss', function () {
    return gulp.src(themeroot + '/dev_css/style.css')
    	.pipe(plumber())
        .pipe(postcss(miniprocessors))
   		.pipe(plumber.stop())
        .pipe(gulp.dest(themeroot + '/css'))
});




 




gulp.task('default', ['browser-sync','css'], function () {
	gulp.watch([themeroot + '/dev_css/style.css'], ['css']);
});
