﻿class Chest extends Phaser.Physics.Arcade.Image {
    constructor(scene, x, y, key, frame) {
        super(scene, x, y, key, frame);
        this.scene = scene;
        this.coins = 10;

        //Enable Physics
        this.scene.physics.world.enable(this);
       
        //Add the chest to existing scene
        this.scene.add.existing(this);
    }
}