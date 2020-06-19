class MainActivity extends Tape.Activity {

    res = [];
    ui = new ui.pages.mainUI;

    fromProps = { alpha: 0 }
    toProps = { alpha: 1 }

    onCreate() {
        this.duration = 200;
        this.ui.btnPopup.on(Laya.Event.CLICK, this, () => {
            TestPopup.show();
        });
        this.ui.btnToast.on(Laya.Event.CLICK, this, () => {
            CommonToast.show("TOAST提示")
        });
    }

}
