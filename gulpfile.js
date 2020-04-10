const gulp = require('gulp');
const sass = require('gulp-sass');
const del = require('del');
var browserSync = require('browser-sync').create();
// var reload      = browserSync.reload;

gulp.task('styles', () => {
    return gulp.src('./app/sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./app/css'));
});

// gulp.task('serve', function () {
//     browserSync.init({
//         server: {
//             baseDir: "./"
//         }
//     });

//     gulp.watch("*.scss").on("change", reload);
// });

gulp.task('clean', () => {
    return del([
        './app/css/main.css',
    ]);
});

gulp.task('watch', () => {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
    gulp.watch('./app/sass/**/*.scss', (done) => {
        gulp.series(['clean', 'styles'])(done);
        browserSync.reload({
            server: {
                baseDir: "./"
            }
        });
        
    });

    gulp.watch('./**/*.html', (done) => {
        browserSync.reload({
            server: {
                baseDir: "./"
            }
        });
        
    });
});

gulp.task('default', gulp.series(['clean', 'styles', 'watch']));