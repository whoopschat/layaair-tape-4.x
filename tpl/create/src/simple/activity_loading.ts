class LoadingActivity extends Tape.Activity {

    ui = new ui.pages.loadingUI

    onCreate() {
        // do something
        setTimeout(() => {
            this.redirectTo(MainActivity);
        }, 1000);
    }

}
