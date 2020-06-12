//////////////////////////
/////  Env
//////////////////////////

const isLayaApp = () => {
    return window.hasOwnProperty("Laya");
}

const isConchApp = () => {
    return window.hasOwnProperty("conch");
}

//////////////////////////
/////  Version
//////////////////////////

let _tape_version = "${tape_version}";
let _app_version = '${app_version}';

function getVersion(): string {
    if (_tape_version.indexOf('${') === 0) {
        return '1.0.0';
    }
    return _tape_version;
}

function getAppVersion(): string {
    if (_app_version.indexOf('${') === 0) {
        return '1.0.0';
    }
    return _app_version;
}

//////////////////////////
/////  Debug
//////////////////////////

let _debugOn = true;

function isDebug() {
    return _debugOn;
}

function setDebug(on: boolean) {
    _debugOn = on;
}

function printDebug(message: any, ...options) {
    if (_debugOn) {
        console.log("Tape:", message, ...options);
    }
}

function printError(message: any, ...options) {
    if (_debugOn) {
        console.error("Tape:", message, ...options);
    }
}

function getClassName(obj) {
    try {
        if (obj) {
            let str = obj.toString();
            let arr;
            if (str.charAt(0) == '[') {
                arr = str.match(/\w+\s∗(\w+)\w+\s∗(\w+)/);
            } else {
                arr = str.match(/function\s*(\w+)/);
            }
            if (arr && arr.length == 2) {
                return arr[1];
            }
        }
    } catch (e) {
    }
    return undefined;
}

//////////////////////////
/////  Env
//////////////////////////

let _env = 'prod';

function setEnv(env) {
    _env = env;
}

function getEnv() {
    return _env;
}

function isDev() {
    return getEnv() !== 'prod';
}

function isProd() {
    return getEnv() === 'prod';
}

export default {
    isLayaApp,
    isConchApp,
    getAppVersion,
    getClassName,
    getVersion,
    isDebug,
    setDebug,
    printError,
    printDebug,
    getEnv,
    setEnv,
    isDev,
    isProd
}