console.log("from menu");

class Menu extends Phaser.Scene {
    constructor() {
        super("menu");
    }
    create() {
        let menu_text = this.add.text(300, 200, "menu goes here");
        menu_text.setOrigin(0.5, 0.5);

        this.scene.start("play");
    }
}