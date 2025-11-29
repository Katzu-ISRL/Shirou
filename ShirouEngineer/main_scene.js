import Phaser from 'phaser';
import log_action from './Scripts/log.js';
import { width_game, height_game, label_game } from '../Config/Settings/game_settings.js'

export class MainScene extends Phaser.Scene {
    constructor() {
        super({ key: 'MainScene' }); 
    }

    preload() {
        log_action.push('Precarga de la escena principal.');
    }

    create() {
        log_action.push('Creación de la escena principal.');

        this.add.text(400, 300, '¡Hola, Phaser!', { fontSize: '32px', fill: '#fff' }).setOrigin(0.5);
        log_action.push('Ajuste del mensaje de prueba en la escena principal.');

        this.cursors = this.input.keyboard.createCursorKeys();
        log_action.push('Iniciando entradas de teclado.');
    }

    update(time, delta) {
    }
}


const config = {
    type: Phaser.CANVAS,
    width: width_game,
    height: height_game,
    parent: label_game, 
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
    },
    scene: [ MainScene ]
};

export default class Game extends Phaser.Game {
    constructor() {
        super(config); 
        log_action.push('Inicializando configuración del juego.');
    }
}