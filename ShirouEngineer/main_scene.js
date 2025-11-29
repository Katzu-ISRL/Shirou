import Phaser from 'phaser';

let log_action = ['Inicio de registro...']

export default class MainScene extends Phaser.Scene {
    constructor() {
        super('MainScene');
    }

    create() {
        log_action.push('Iniciando la escena principal del juego.');

        const { width, height } = this.scale;
        this.add.image(width / 2, height / 2, 'background').setScrollFactor(0);
        log_action.push('Ajuste del fondo de la escena principal.');

        this.cursors = this.input.keyboard.createCursorKeys();
        log_action.push('Iniciando entradas de teclado.');

        this.scoreText.setScrollFactor(0);
        log_action.push('Fijando la camara.');
    }

    update(time, delta) {
    }
}