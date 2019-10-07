class UIScene extends Phaser.Scene {
    constructor() {
        super("UI");
    }

    Create() {
        this.setupUiElements();
        this.setupEvents();
    }

    setupUiElements() {
        // Create the score text game object
        this.scoreText = this.add.text(35, 8, "Coins: 0", { fontSize: "16px", fill: "#fff" });
        // Create coin icon
        this.coinIcon = this.add.image(15, 15, "items", 3);
    }

    setupEvents() {

    }
}