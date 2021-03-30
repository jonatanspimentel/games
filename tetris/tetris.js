import { templateBlocks } from './templateBlock.js';
import pieceModule from './pieceModule.js';
import observerModule from './observerModule.js';

import areaHtml from './areaHtml.js';
import pieceHtml from './pieceHtml.js';

pieceModule.addPiece(templateBlocks.tBlock);

areaHtml.createAreaHtml();
pieceHtml.addPieceHtml();

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
