import { actualBlock, blockArea, area } from './config.js';
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

    function changeForm() {

        let block = getType();

        if (block.length > 1) {

            blockHtml.remove(blockArea[blockArea.length - 1]);
            
            if (actualBlock.form == (block.length - 1))
                actualBlock.form = 0;
            else 
                actualBlock.form ++;

            add(getForm(block), 'jblock');
            blockHtml.add(blockArea[blockArea.length - 1]);

        }

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

            blockMoved.push(fragmentMoved);

        });

        blockHtml.remove(oldBlock);
        blockArea.push(blockMoved);
        blockHtml.add(blockMoved);

    }

    function getRandomBlock() {
        
        actualBlock.type = Math.floor(Math.random() * templateBlock.length);
        let blockType = getType();

        actualBlock.form = Math.floor(Math.random() * blockType.length);
        let blockForm = getForm(blockType);

        return blockForm;
    }

    function getType() {
        return templateBlock[actualBlock.type];
    }

    function getForm(block) {
        return block[actualBlock.form];
    }

    return {
        add,
        changeForm,
        getRandomBlock,
        move
    }
}

export default blockModule();