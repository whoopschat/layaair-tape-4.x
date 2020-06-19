class CommonToastView extends Tape.ToastView {

    ui = new ui.commons.common_toast_viewUI;

    constructor() {
        super();
    }

    onShow() {
        if (this.params.view) {
            this.ui.addChild(this.params.view);
        }
    }

}

class CommonToastText extends Tape.ToastView {

    ui = new ui.commons.common_toast_textUI;

    constructor() {
        super();
        this.duration = 300;
        this.displayDuration = 0;
        this.fromProps = { y: 50, alpha: 0.5 };
        this.toProps = { y: 0, alpha: 1 };
        this.exitProps = { y: -50, alpha: 0.5 };
    }

    onShow() {
        this.ui.text.text = this.params.text || "TOAST";
    }

}


class CommonToast {

    static show(text) {
        Tape.toast.showToast(CommonToastText, { text })
    }

    static showAsView(view) {
        Tape.toast.showToast(CommonToastView, { view })
    }

}
