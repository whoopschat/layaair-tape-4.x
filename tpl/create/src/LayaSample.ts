// 游戏入口
class GameMain {
    constructor() {
        // 调试模式
        Tape.env.setDebug(true);
        // 设置当前环境
        Tape.env.setEnv("dev");
        // 初始化场景
        Tape.init(750, 1334, Laya.WebGL);
        // 设置纯色背景
        Tape.bg.setBgColor('#18a28b');
        // 开始加载游戏
        Tape.start({
            mainPage: LoadingActivity,
            commonRes: [
                { url: 'res/atlas/comp.atlas', type: Laya.Loader.ATLAS }
            ]
        });
    }
}

new GameMain();
