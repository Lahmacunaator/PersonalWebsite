class UiButton extends Phaser.GameObjects.Container {
    constructor(scene, x, y, key, hoverKey, text, targetCallback) {
        super(scene, x, y);
        this.scene = scene; // The scene this container will be added to
        this.x = x; // The x position of the container
        this.y = y; // The y position of the container
        this.key = key; // The background image of the button
        this.hoverKey = hoverKey; // The image that will be displayed when player hovers over the button
        this.text = text; // The text will be displayed on the button
        this.targetCallback = targetCallback; // The OnClick function

        // Create ui button
        this.createButton();

        // Add the container to the scene
        this.scene.add.existing(this);
    }

    createButton() {
        //Create Play Game Button
        this.button = this.scene.add.image(0, 0, "button1");
        this.button.setInteractive();

        // Scale the button
        this.button.setScale(1.4);

        // Create the button text
        this.buttonText = this.scene.add.text(0, 0, this.text, { fontSize: "26px", fill: "#fff" });

        // Center the button text in the button
        Phaser.Display.Align.In.Center(this.buttonText, this.button);

        // Add the created game objects to the container
        this.add(this.button);
        this.add(this.buttonText);

        // assigning event listeners
        this.button.on("pointerdown",
            () => {
                this.targetCallback();
            });

        this.button.on("pointerover",
            () => {
                console.log("pointer over button");
                this.button.setTexture(this.hoverKey);
            });

        this.button.on("pointerout",
            () => {
                console.log("pointer out of button");
                this.button.setTexture(this.key);
            });
    }
}