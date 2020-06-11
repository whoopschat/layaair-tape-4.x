const FileUtils = require('../utils/file');
const gulp = require('gulp');
const zip = require('gulp-zip');

const zipTask = (output, zipName) => {
    return function () {
        FileUtils.deleteFileSync(`${output}/${zipName}`);
        return gulp.src(`${output}/**/*`)
            .pipe(zip(zipName))
            .pipe(gulp.dest(output));
    }
}

module.exports = {
    zipTask
}
