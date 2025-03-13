import gulp from 'gulp';
import gulpSass from 'gulp-sass';
import * as sassCompiler from 'sass'; // Fixed Sass import
import cleanCss from 'gulp-clean-css';
import concatCss from 'gulp-concat-css';
import del from 'del';
import fs from 'fs';

// Configure gulp-sass to use Dart Sass
const sassCompile = gulpSass(sassCompiler);

const pathConfig = {
    compileScssSrc: ['./src/resources/scss/**/*.scss'],
    concatCssSrc: ['./src/resources/dest/css/*.css'],
    destCss: './src/resources/dest/css/',
    destImages: './src/resources/dest/image/',
    destSvg: './src/resources/dest/svg/',
};

// Ensure the destination directory exists before writing files pathConfig.destImages, pathConfig.destSvg
function ensureDestFolders(done) {
    const folders = [pathConfig.destCss ];
    folders.forEach(folder => {
        if (!fs.existsSync(folder)) {
            fs.mkdirSync(folder, { recursive: true }); // Create folder if it doesn't exist
        }
    });
    done();
}

// Task to compile SCSS to CSS
function compileScss() {
    return gulp.src(pathConfig.compileScssSrc)
        .pipe(sassCompile().on('error', sassCompile.logError))
        .pipe(cleanCss()) // Minify CSS (optional)
        .pipe(gulp.dest(pathConfig.destCss));
}

// Task to concat CSS files
function concatCssTask() {
    return gulp.src(pathConfig.concatCssSrc)
        .pipe(concatCss("bundle.css"))
        .pipe(cleanCss())
        .pipe(gulp.dest(pathConfig.destCss)); // Ensure dest folder exists
}

// Task to clean the destination folders  pathConfig.destImages, pathConfig.destSvg
function cleanDest() {
    return del([pathConfig.destCss]);
}

// Watch task
function watchFiles() {
    gulp.watch(pathConfig.compileScssSrc, compileScss);
    gulp.watch(pathConfig.concatCssSrc, concatCssTask);
}

// Default task: clean first, ensure folders exist, then build & watch
export default gulp.series(
    cleanDest,
    ensureDestFolders, // Ensure necessary folders exist before running tasks
    gulp.parallel(compileScss, concatCssTask),
    //watchFiles
    gulp.parallel(watchFiles) // Ensure watch task keeps running
);
