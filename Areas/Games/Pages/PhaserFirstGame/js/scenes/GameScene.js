class GameScene extends Phaser.Scene {
    constructor() {
        super("Game");
    }

    init() {
        this.scene.launch("UI");
    }

    create() {
        var goldPickupAudio = this.sound.add("goldSound", { loop: false, volume: 1 });

        this.chest = new Chest(this, 300, 300, "items", 3); //index of the sprite-sheet element

        this.wall = this.physics.add.image(500, 100, "button1");
        this.wall.setImmovable();

        this.player = new Player(this, 32, 32, "characters", 0);

        this.physics.add.collider(this.player, this.wall);
        this.physics.add.overlap(this.player, this.chest, function (player, chest) {
            goldPickupAudio.play();
            chest.destroy();
        });

        this.cursors = this.input.keyboard.createCursorKeys();
    }

    update() {
        this.player.update(this.cursors);
    }
}