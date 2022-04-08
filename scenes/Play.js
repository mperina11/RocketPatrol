class Play extends Phaser.Scene {
    constructor() {
        super("play");
    }
    create() {
        this.add.text(20, 20, "Welcome to play scene");

        this.add.rectangle(0, 0, game.config.width, borderUISize, oxfacade).setOrigin(0,0);
    }
}