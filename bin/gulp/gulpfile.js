'use strict';
const chalk = require('chalk');
const path = require('path');
const File = require('./utils/file');
const Html = require('./utils/html');
const Empty = require('./tasks/empty');
const Clean = require('./tasks/clean');
const Resources = require('./tasks/resources');
const Pngquant = require('./tasks/pngquant');
const Template = require('./tasks/template');
const Mergejs = require('./tasks/mergejs');
const Mergecss = require('./tasks/mergecss');
const Injection = require('./tasks/injection');
const Zipe = require('./tasks/zip');
const App = require('./tasks/app');

const gulp = require('gulp');
const minimist = require('minimist');
const program = minimist(process.argv.slice(2), []);

const supportPlatform = ["h5", "wx", "tt", "cy", "android"]

if (!program.platform) {
    program.platform = 'h5';
}

if (!program.jsfile) {
    program.jsfile = 'code.js';
}

if (!program.jschunk) {
    program.jschunk = 'code.chunk.js';
}

if (!program.jsunpack) {
    program.jsunpack = 'code.unpack.js';
}

if (program.env) {
    if (program.env === 'prod') {
        program.env = 'prod';
    } else {
        program.env = 'dev';
    }
} else {
    program.env = 'dev';
}

if (!program.cssfile) {
    program.cssfile = 'style.css';
}

if (!program.index) {
    program.index = 'index.html';
}

const app_version = `${program.version || File.readJson((program.bincwd || '.') + '/package.json').version || '1.0.0'}`;

if (!program.x) {
    console.log(`build to ... `, chalk.yellow(program.platform));
    console.log(`build version ... `, chalk.yellow(app_version));
    console.log('');
}

if (program.input) {
    program.input = path.join((program.bincwd || '.') + "/" + program.input);
}

if (program.output) {
    program.output = path.join((program.bincwd || '.') + "/" + program.output);
    program.outputTemp = program.platform == 'android' ? program.output + '/temp' : program.output;
}

const replaceList = [
]

const initReplaceList = (htmlFile) => {
    let projectname = program.projectname || Html.readValue({ file: htmlFile, selector: 'title' }, "Game");
    let orientation = program.orientation || Html.readValue({ file: htmlFile, selector: 'meta', attribute: 'screenorientation' }, "portrait");
    let packagename = program.packagename || Html.readValue({ file: htmlFile, selector: 'meta', attribute: 'packagename' }, "com.tapegame");
    let wx_app_id = program.wx_app_id || Html.readValue({ file: htmlFile, selector: 'meta', attribute: 'wx_app_id' }, "touristappid");
    let tt_app_id = program.tt_app_id || Html.readValue({ file: htmlFile, selector: 'meta', attribute: 'tt_app_id' }, "testappId");
    let bg_color = program.bgcolor || Html.readValue({ file: htmlFile, selector: 'meta', attribute: 'bgcolor' }, "#000000");
    replaceList.push(['${wx_app_id}', wx_app_id]);
    replaceList.push(['${tt_app_id}', tt_app_id]);
    replaceList.push(['${app_version}', app_version]);
    replaceList.push(['${bg_color}', bg_color]);
    replaceList.push(['${orientation}', orientation]);
    replaceList.push(['${project_name}', projectname]);
    replaceList.push(['${package_name}', packagename]);
    replaceList.push(['${env}', program.env]);
    replaceList.push(['${codeJs}', program.jsfile]);
    replaceList.push(['${chunkJs}', program.jschunk]);
    replaceList.push(['${unpackJs}', program.jsunpack]);
    replaceList.push(['"${wx_is_tourist}"', wx_app_id === 'touristappid']);
}

const begin = () => {
    let checkPlatform = supportPlatform.indexOf(program.platform) >= 0;
    let checkInput = !!program.input;
    let checkOutput = !!program.output;
    let checkIndex = false;
    if (checkPlatform && checkInput && checkOutput) {
        let index = `${program.input}/${program.index}`;
        checkIndex = File.existsSync(index);
        if (checkIndex) {
            initReplaceList(index);
            return true;
        }
    }
    console.log('');
    if (!checkPlatform) {
        console.log(chalk.red('ERROR:invalid parameters [platform]'));
    }
    if (!checkInput) {
        console.log(chalk.red('ERROR:invalid parameters [input]'));
    }
    if (!checkOutput) {
        console.log(chalk.red('ERROR:invalid parameters [output]'));
    }
    if (!checkIndex) {
        console.log(chalk.red('ERROR:invalid parameters [index]'));
    }
    console.log('');
    return false;
}

gulp.task('error', Empty.emptyTask(() => {
    throw new Error('Invalid Parameters');
}));

gulp.task('help', Empty.emptyTask(() => {
    console.log("");
    console.log("");
    console.log("Usage: layaair-tape build [options]");
    console.log("  --input            input dir");
    console.log("  --output           output dir");
    console.log("  --env              [Optional] development(dev) || production(prod)");
    console.log("  --platform         [Optional] h5 | tt | wx | quickgame | android");
    console.log("  --index            [Optional] index.html file def: index.html");
    console.log("  --version          [Optional] version code def: read package.json");
    console.log("  --cssfile          [Optional] cssfile def: style.css");
    console.log("  --jsfile           [Optional] jsfile def: code.js");
    console.log("  --jschunk          [Optional] jschunk def: code.chunk.js");
    console.log("  --projectname      [Optional] project name");
    console.log("  --packagename      [Optional] android package name");
    console.log("  --orientation      [Optional] android screen orientation");
    console.log("  --pngquant         [Optional] pngquant quality def:65-80");
    console.log("  --injection        [Optional] injection js file");
    console.log("  --injection-append [Optional] injection append js file");
    console.log("  --bgcolor          [Optional] h5 body bg color");
    console.log("  --imgbase64        [Optional] h5 html image base64");
    console.log("  --zip              [Optional] [bool] gen zip");
    console.log("  --zip-name         [Optional] [bool] zip name, def:build.zip");
    console.log("  --min              [Optional] [bool] uglify js");
    console.log("  --minchunk         [Optional] [bool] uglify chunk js");
    console.log("  --mergeunpack      [Optional] [bool] merge unpack js");
    console.log("  --babel            [Optional] [bool] babel js");
    console.log("  --babelchunk       [Optional] [bool] babel chunk js");
    console.log("  --force            [Optional] [bool] ignore [platform].lock file");
    console.log("  --x                [Optional] show this help");
    console.log("");
    console.log("");
}));

gulp.task('clean', Clean.cleanTask(program.output, `${program.platform}.lock`, program.force));

gulp.task('resources', Resources.resourcesTask(program.input, program.outputTemp));

gulp.task('template', Template.templateTask(`./tpl/build/${program.platform}`, program.output, replaceList, `${program.platform}.lock`, program.imagebase64, program.force));

gulp.task('pngquant', Pngquant.pngquantTask(program.input, program.outputTemp, program.pngquant));

gulp.task('mergeCss', Mergecss.mergeCssTask(`${program.input}/${program.index}`, program.outputTemp, program.cssfile, program.min, replaceList));

gulp.task('mergeJs', Mergejs.mergeJsTask(`${program.input}/${program.index}`, program.outputTemp, program.jsfile, program.jschunk, program.jsunpack, program.min, program.minchunk, program.babel, program.babelchunk, replaceList));

gulp.task('inject', Injection.injectTask(`${program.input}/${program.index}`, program.index, program.outputTemp, program.cssfile, program.jsfile, program.jschunk, program.jsunpack, program.mergeunpack, program.injection, program['injection-append'], program.force));

gulp.task('zip', Zipe.zipTask(program.outputTemp, program['zip-name'] || "build.zip"))

gulp.task('android', App.androidTask(program.outputTemp, "http://stand.alone.version/index.html", program.output));

gulp.task('build', function (done) {
    let tasks = [];
    if (program.x) {
        tasks.push('help');
    } else if (!begin()) {
        tasks.push('error');
    } else {
        tasks.push('clean');
        tasks.push('resources');
        tasks.push('template');
        if (program.pngquant) {
            tasks.push('pngquant');
        }
        tasks.push('mergeCss');
        tasks.push('mergeJs');
        tasks.push('inject');
        if (program.zip) {
            tasks.push('zip');
        }
        if (program.platform === 'android') {
            tasks.push('android');
        }
    }
    return gulp.series(tasks)((error) => {
        done();
        console.log('');
        if (error) {
            console.log(chalk.red(`build error: ${error.message}`));
        } else {
            console.log(chalk.yellow(`output : ${path.relative(program.bincwd, program.output)}`));
            console.log(chalk.yellow('build complete.\n'));
        }
    });
});