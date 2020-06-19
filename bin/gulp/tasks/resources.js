var gulp = require('gulp');

const getResources = (dir) => {
    return [
        // res
        dir + '/**/res/**/*',
        dir + '/**/*.*',
        // exclude
        '!' + dir + '/**/*.js'
    ];
}

const resourcesTask = (inputPath, outputDir) => {
    return function () {
        return gulp.src(getResources(inputPath))
            .pipe(gulp.dest(outputDir));
    }
}

module.exports = {
    resourcesTask
}