class TestPopup extends Tape.PopupView {

    ui = new ui.popups.test_popupUI;

    constructor() {
        super();
        this.ui.btnClose.on(Laya.Event.CLICK, this, () => {
            this.hide();
        });
    }

    onShow() {
    }

    onHide() {
    }

}
