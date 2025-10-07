import ASSETS from '../assets.js';

export default class Key extends Phaser.Physics.Arcade.Image {
    constructor(scene, x, y) {
        super(scene, x, y, ASSETS.image.keyPickup.key);

        scene.add.existing(this);
        scene.physics.add.existing(this);

        this.mapOffset = scene.getMapOffset();
        this.setPosition(
            this.mapOffset.x + (x * this.mapOffset.tileSize),
            this.mapOffset.y + (y * this.mapOffset.tileSize)
        );

        // scale down since image is large
        this.setDisplaySize(32, 32);
        this.setDepth(90);
        this.scene = scene;
    }

    collect() {
        this.scene.hasKey = true;
        this.scene.tutorialText.setVisible(false); // hide “Find the key” message
        this.scene.removeItem(this);
    }
}