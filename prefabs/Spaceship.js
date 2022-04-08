class Spaceship extends Phaser.GameObjects.Sprite {
    constructor (scene, x, y, texture, frame, pointValue) {
        super (scene, x, y, texture, frame);
        scene.add.existing(this); // add to existing scene
        this.points = pointValue; // store pointValue
        this.moveSpeed = 3; // pixels per frame
    }

    update () {
        this.x -= this.moveSpeed;
        if (this.x <= 0 - this.width) {
            this.x = game.config.width;
        }
    }
}