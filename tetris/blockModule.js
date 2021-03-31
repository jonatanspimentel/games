import { blockArea, area } from './config.js'
import blockHtml from './blockHtml.js';

function blockModule() {

    function addBlock(block, color) {
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
        blockArea.push(piece);
    }

    function move(c, l = 0) {

        let oldBlock = blockArea.pop();
        let blockMoved = [];

        oldBlock.forEach(b => {
            
            let fragmentMoved = { 
                color: b.color,
                column: (b.column + c),
                line: (b.line + l)
            };

            //deveria estar aqui mesmo?
            blockHtml.remove(b);

            blockMoved.push(fragmentMoved);

        });

        blockArea.push(blockMoved);
        blockHtml.addBlockHtml(blockMoved);

    }

    return {
        addBlock,
        move
    }
}

export default blockModule();