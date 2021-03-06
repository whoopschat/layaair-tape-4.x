import env from "../utils/env";
import { initScreen } from "./manager/screen";
import { initNavigator, setNavigatorReady } from "./navigator/init";

let _inited = false;

export function init(width: number, height: number, ...options) {
    if (_inited) {
        return;
    }
    if (!env.isLayaApp()) {
        env.printError('Please ensure that the \'Laya\' library has been introduced.');
        return;
    }
    env.printDebug(`init...`);
    env.printDebug(`tape version: ${env.getVersion()}`);
    env.printDebug(`app env: ${env.getEnv()}`);
    env.printDebug(`app debug: ${env.isDebug()}`);
    env.printDebug(`app version: ${env.getAppVersion()}`);
    initScreen(false, width, height, ...options);
    _inited = true;
}

export function init3D(width: number, height: number, ...options) {
    if (_inited) {
        return;
    }
    if (!env.isLayaApp()) {
        env.printError('Please ensure that the \'Laya\' library has been introduced.');
        return;
    }
    env.printDebug(`init3D...`);
    env.printDebug(`tape version: ${env.getVersion()}`);
    env.printDebug(`app env: ${env.getEnv()}`);
    env.printDebug(`app debug: ${env.isDebug()}`);
    env.printDebug(`app version: ${env.getAppVersion()}`);
    initScreen(true, width, height, ...options);
    _inited = true;
}

export function start(options, onLoaded = null) {
    if (!_inited) {
        env.printError('Please complete the initialization of Tape first.');
        return;
    }
    if (!options) {
        options = {};
    }
    let newOptions = {
        mainPage: options.mainPage || null,
        commonRes: options.commonRes || [],
        fileVersion: options.fileVersion,
        onLoadProgress: (progress) => {
            options.onLoadProgress && options.onLoadProgress(progress);
        },
        onLoaded: () => {
            onLoaded && onLoaded();
            options.onLoaded && options.onLoaded();
        }
    }
    initNavigator(newOptions);
    setNavigatorReady();
}