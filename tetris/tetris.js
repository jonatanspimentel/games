
import { blockArea, game, moveTo } from './config.js';

import areaHtml from './areaHtml.js';
import blockHtml from './blockHtml.js';

import blockModule from './blockModule.js';
import observerModule from './observerModule.js';

areaHtml.createAreaHtml();

let randomBlock = blockModule.getRandomBlock();

blockModule.add(randomBlock, 'tblock');
blockHtml.add(blockArea[blockArea.length - 1]);

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
