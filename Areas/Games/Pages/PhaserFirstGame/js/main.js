var config = {
    type: Phaser.AUTO,
    width: 1000,
    height: 600,
    scene: [
        BootScene,
        TitleScene,
        GameScene,
        UIScene
    ],
    physics: {
        default: "arcade",
        arcade: {
            debug: true,
            gravity: {
                y: 0
            }
        }
    },
    parent: "main-collapse"
};

var game = new Phaser.Game(config);