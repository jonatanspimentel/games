import { pieceArea, game } from './config.js'

function pieceModule() {

    function addPiece(block) {
        createPiece(block.formD, block.color);
    }

    function createPiece(format, color) {
        for (let i = 0; i < format.length; i++)
            for (let j = 0; j < format[i].blocks.length; j++) {
                increase({
                    line: (game.initialLine + format[i].line),
                    column: (game.initialColumn + format[i].blocks[j]),
                    color: color
                });
            }
    }

    function increase(piece) {
        pieceArea.push(piece);
    }

    return {
        addPiece,
        createPiece
    }
}

export default pieceModule();