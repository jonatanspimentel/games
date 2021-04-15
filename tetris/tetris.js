
import { game, moveTo } from './config.js';

import areaHtml from './areaHtml.js';

import blockModule from './blockModule.js';
import observerModule from './observerModule.js';

areaHtml.createAreaHtml();

blockModule.newBlock();

 function sleep(ms) {
     return new Promise(resolve => setTimeout(resolve, ms));
 }

 async function infinitLoop() {
     while (!game.state.endGame) {
         await sleep(game.speed);
         if (!game.pause)
            blockModule.move(0, moveTo.Down);
     }
 }

infinitLoop();

const gamePromisse = observerModule.createGame();
const keyboardListener = observerModule.createKeyboardListener();

keyboardListener.subscribe(gamePromisse.getCommand);
