const HtmlUtils = require('../utils/html');
const FileUtils = require('../utils/file');
const UUID = require('../utils/uuid');

const gulp = require('gulp');
const gulpConcat = require('gulp-concat');
const gulpUglify = require('gulp-uglify');
const gulpReplace = require('gulp-replace');
const gulpDownloader = require('gulp-downloader');

const remoteFiles = [];

const downloadRemoteJs = (htmlFile, tempDir) => {
    return (done) => {
        var remoteFiles = HtmlUtils.readRemoteFiles({ file: htmlFile, selector: 'script', attribute: 'src', exclude: { build: 'unpack' } });
        var downloads = [];
        remoteFiles.forEach(file => {
            let fileName = ".temp/" + UUID.gid();
            remoteFiles.push(tempDir + '/' + fileName);
            downloads.push({
                fileName,
                request: {
                    url: file
                }
            });
        });
        if (downloads.length > 0) {
            return gulpDownloader(downloads)
                .pipe(gulp.dest(tempDir));
        } else {
            done();
        }
    }
}

const mergeJs = (htmlFile, outputDir, jsFile, uglify, replaces = []) => {
    return (done) => {
        var loadFiles = [...remoteFiles];
        loadFiles.push(...HtmlUtils.readLocalFiles({ file: htmlFile, selector: 'script', attribute: 'src', exclude: { build: ['unpack'] } }));
        if (loadFiles.length > 0) {
            var task = gulp.src(loadFiles);
            task = task.pipe(gulpConcat(jsFile))
            if (uglify) {
                task = task.pipe(gulpUglify());
            }
            replaces.forEach(replace => {
                if (replace instanceof Array) {
                    task = task.pipe(gulpReplace(...replace));
                }
            });
            return task.pipe(gulp.dest(outputDir));
        } else {
            done();
        }
    }
}

const cleanTemp = (outputDir) => {
    return (done) => {
        FileUtils.deleteFolderSync(outputDir + '/.temp');
        done();
    }
}

const mergeJsTask = (htmlFile, outputDir, jsFile, uglify, replaces) => {
    gulp.task('mergeJs-downloadRemoteJs', downloadRemoteJs(htmlFile, outputDir));
    gulp.task('mergeJs-mergeJs', mergeJs(htmlFile, outputDir, jsFile, uglify, replaces));
    gulp.task('mergeJs-cleanTemp', cleanTemp(outputDir));
    return gulp.series([
        'mergeJs-downloadRemoteJs',
        'mergeJs-mergeJs',
        'mergeJs-cleanTemp'
    ]);
}

module.exports = {
    mergeJsTask
}