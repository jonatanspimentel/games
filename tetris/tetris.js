import { templateBlocks } from './templateBlock.js';
import { blockArea } from './config.js';

import blockModule from './blockModule.js';
import observerModule from './observerModule.js';

import areaHtml from './areaHtml.js';
import blockHtml from './blockHtml.js';

blockModule.addBlock(templateBlocks.tBlock.formA, templateBlocks.tBlock.color);

areaHtml.createAreaHtml();
blockHtml.addBlockHtml(blockArea[blockArea.length - 1]);

// function sleep(ms) {
//     return new Promise(resolve => setTimeout(resolve, ms));
// }
// async function infinitLoop() {
//     while (!game.state.endGame) {
//         await sleep(game.state.speed);
//         //if (!game.pause)
//         //game.walk();
//     }
// }

//infinitLoop();

const gamePromisse = observerModule.createGame();
const keyboardListener = observerModule.createKeyboardListener();

keyboardListener.subscribe(gamePromisse.getCommand);
