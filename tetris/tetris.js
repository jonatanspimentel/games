import { templateBlocks } from './templateBlock.js';
import pieceModule from './pieceModule.js';

import areaHtml from './areaHtml.js';
import pieceHtml from './pieceHtml.js';

pieceModule.addPiece(templateBlocks.tBlock);

areaHtml.createAreaHtml();
pieceHtml.addPieceHtml();
