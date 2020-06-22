import popup from "./popupmanager";
import screen from "../manager/screen";
import ui from "./ui";
import pipeline from "../pipeline";

export default class PopupView extends ui {

    static show(params, onHide) {
        popup.showPopup(this, params, onHide);
    }

    static pipeShow(params, onHide) {
        pipeline.put("popup", () => {
            popup.showPopup(this, params, (...params) => {
                pipeline.next("popup");
                onHide && onHide(...params);
            });
        })
    }

    static hide(result) {
        popup.hidePopup(this, null, result);
    }

    public popup;
    public params;
    public duration = 500;
    public easeIn = null;
    public easeOut = null;
    public fromProps = null;
    public toProps = null;
    public exitProps = null;
    public onShow?(): void;
    public onHide?(): void;
    public isTranslucent = false;
    public canceledOnTouchOutside = false;

    public hide(result = null) {
        popup.hidePopup(this.popup, this, result);
    }

    constructor() {
        super(() => {
            this.hide();
        });
        this.nonPenetrating = true;
        this.width = screen.getDesignWidth();
        this.height = screen.getDesignHeight();
    }

}