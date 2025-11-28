class SceneA extends Phaser.Scene {
    constructor() {
        super('sceneA');
    }

    preload() {
        this.load.image('personaje', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3ihZp9K4lYec2DlsMRqBQoAl6Hn3eMMC7_A&s'); 
    }

    create() {
        const imagen = this.add.image(200, 400, 'personaje');
    }
}

const config = {

    type: Phaser.AUTO,

    width: 1900,
    height: 1280,

    parent: 'game-container',
    scene: [SceneA]
};

const game = new Phaser.Game(config);