import { templateBlocks } from './templateBlock.js';
import { pieceArea } from './config.js';

import pieceModule from './pieceModule.js';
import observerModule from './observerModule.js';

import areaHtml from './areaHtml.js';
import pieceHtml from './pieceHtml.js';

pieceModule.addPiece(templateBlocks.tBlock.formA, templateBlocks.tBlock.color);

areaHtml.createAreaHtml();
pieceHtml.addPieceHtml(pieceArea[pieceArea.length - 1]);

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
