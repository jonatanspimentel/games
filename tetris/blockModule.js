import { blockArea, area } from './config.js';
import { templateBlock } from './templateBlock.js';

import blockHtml from './blockHtml.js';

function blockModule() {

    function add(block, color) {

        var newBlock = [];

        for (let i = 0; i < block.length; i++) {
            for (let j = 0; j < block[i].columns.length; j++) {
                newBlock.push({
                    line: (area.initialPosition.line + block[i].line),
                    column: (area.initialPosition.column + block[i].columns[j]),
                    color: color
                });
            }
        }

        blockArea.push(newBlock);
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
        blockHtml.add(blockMoved);

    }

    function draw() {

        var rdmBlock = Math.floor(Math.random() * templateBlock.length);
        var block = templateBlock[rdmBlock];

        let rdmForm = Math.floor(Math.random() * block.length);
        var form = block[rdmForm];

        return form;
    }

    return {
        add,
        move,
        draw
    }
}

export default blockModule();