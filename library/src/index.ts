import "./adapter";
import "./polyfill";
import bg from "./services/manager/bg";
import eft from "./services/manager/eft";
import screen from "./services/manager/screen";
import audio from './services/audio';
import env from "./utils/env";
import event from "./services/event";
import pipeline from "./services/pipeline";
import runtime from "./services/runtime";
import utils from './services/utils';
import message from "./services/message";
import navigator from "./services/navigator/stack";
import popup from "./services/display/popupmanager";
import toast from "./services/display/toastmanager";
import Activity from "./services/display/activity";
import PopupView from "./services/display/popupview";
import ToastView from "./services/display/toastview";
import { init, init3D, start } from './services/init';

const Tape = {
    init,
    init3D,
    start,
    env,
    bg,
    eft,
    screen,
    audio,
    event,
    runtime,
    pipeline,
    navigator,
    utils,
    popup,
    toast,
    message,
    Activity,
    PopupView,
    ToastView,
}

if (typeof window !== "undefined") {
    (window as any).Tape = Tape;
}

export = {
    Tape
}
