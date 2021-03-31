import { pieceArea, area } from './config.js'
import pieceHtml from './pieceHtml.js';
import css from './css.js';

function pieceModule() {

    function addPiece(block, color) {
        createByFormat(block, color);
    }

    function createByFormat(format, color) {

        var block = [];

        for (let i = 0; i < format.length; i++)
            for (let j = 0; j < format[i].blocks.length; j++) {
                block.push({
                    line: (area.initialPosition.line + format[i].line),
                    column: (area.initialPosition.column + format[i].blocks[j]),
                    color: color
                });
            }

        increase(block);
    }

    function increase(piece) {
        pieceArea.push(piece);
    }

    function move(c, l = 0) {

        let oldBlock = pieceArea.pop();
        let blockMoved = [];

        oldBlock.forEach(b => {
            
            let fragmentMoved = { 
                color: b.color,
                column: (b.column + c),
                line: (b.line + l)
            };

            //deveria estar aqui mesmo?
            css.removeClassAttrById(`l${b.line}c${b.column}` , "tblock")

            blockMoved.push(fragmentMoved);

        });

        pieceArea.push(blockMoved);
        pieceHtml.addPieceHtml(blockMoved);

    }

    return {
        addPiece,
        move
    }
}

export default pieceModule();