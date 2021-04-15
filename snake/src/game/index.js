import { game } from './config.js';

import gameModule from './game.js'; 
import observerModule from '../modules/observerModule.js'


function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
  
async function infinitLoop() {

    while(!game.state.endGame) {
        
        await sleep(game.speed);
        
        if (!game.state.pause)
            gameModule.walk();
    }
}

gameModule.start();
gameModule.startHtml();

const gamePromisse = observerModule.createGame();
const keyboardListener = observerModule.createKeyboardListener();

keyboardListener.subscribe(gamePromisse.getCommand);

infinitLoop();