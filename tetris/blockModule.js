import { blockArea, area } from './config.js';
import { templateBlock } from './templateBlock.js';

import blockHtml from './blockHtml.js';

function blockModule() {

    function addBlock(block, color) {
        createByFormat(block, color);
    }

    function createByFormat(blockLines, color) {

        var block = [];

        for (let i = 0; i < blockLines.length; i++) {
            for (let j = 0; j < blockLines[i].columns.length; j++) {
                block.push({
                    line: (area.initialPosition.line + blockLines[i].line),
                    column: (area.initialPosition.column + blockLines[i].columns[j]),
                    color: color
                });
            }
        }
        
        increase(block);
    }

    function increase(block) {
        blockArea.push(block);
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

            blockHtml.remove(b);
            blockMoved.push(fragmentMoved);

        });

        blockArea.push(blockMoved);
        blockHtml.addBlockHtml(blockMoved);

    }

    function draw() {
        
        var rdmBlock = Math.floor(Math.random() * templateBlock.length);
        var block = templateBlock[rdmBlock];

        let rdmForm = Math.floor(Math.random() * block.length);
        var form = block[rdmForm];

        return form;
    }

    return {
        addBlock,
        move,
        draw
    }
}

export default blockModule();