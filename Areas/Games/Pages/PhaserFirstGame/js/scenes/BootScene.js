class BootScene extends Phaser.Scene {
    constructor() {
        super("Boot");
    }

    preload() {
        this.load.image("button1", "PhaserFirstGame/assets/images/ui/blue_button01.png");
        this.load.image("button2", "PhaserFirstGame/assets/images/ui/blue_button02.png");
        this.load.spritesheet("items", "PhaserFirstGame/assets/images/items.png", { frameWidth: 32, frameHeight: 32 }); //sprite size in sprite-sheet
        this.load.spritesheet("characters", "PhaserFirstGame/assets/images/characters.png", { frameWidth: 32, frameHeight: 32 });
        this.load.audio("goldSound", ["PhaserFirstGame/assets/audio/Pickup.wav"]);
    }

    create() {
        console.log("Game Scene Activated!");
        this.scene.start("Game");
    }
}