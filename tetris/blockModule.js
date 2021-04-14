import { actualBlock, area, blockArea, embeddedBlocks, game } from './config.js';
import { templateBlock, templateColor } from './templateBlock.js';

import blockHtml from './blockHtml.js';

function blockModule() {

    function add(block) {

        var newBlock = [];

        for (let i = 0; i < block.blockForm.length; i++) {
            for (let j = 0; j < block.blockForm[i].columns.length; j++) {
                newBlock.push({
                    line: (game.initialPosition.line + block.blockForm[i].line),
                    column: (game.initialPosition.column + block.blockForm[i].columns[j]),
                    color: block.colorBlock
                });
            }
        }

        blockArea.push(newBlock);
    }

    function modify() {

        let block = getType();

        if (block.length > 1) {

            blockHtml.remove(blockArea[blockArea.length - 1]);

            if (actualBlock.form == (block.length - 1))
                actualBlock.form = 0;
            else {
                actualBlock.form++;
            }

            add({ blockForm: getForm(block), colorBlock: getColor() });
            show();

        }

    }

    function show() {
        blockHtml.show(blockArea[blockArea.length - 1]);
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

        game.initialPosition.line = (game.initialPosition.line + l);
        game.initialPosition.column = (game.initialPosition.column + c);

        blockHtml.remove(oldBlock);
        blockArea.push(blockMoved);
        blockHtml.show(blockMoved);

        embedppdedBlock();

    }

    function embedppdedBlock() {
        //TODO: remover condição
        if (game.initialPosition.line === area.size.maxLines - 1 || verifyStackBlocks()) {
            restartInitialPosition();
            embedBlock();
            newBlock();
        }
    }

    function verifyStackBlocks() {
        let b = blockArea[blockArea.length - 1];
        let retorno = false;
        b.forEach(b => {
            if (embeddedBlocks.filter(o => o.line === b.line + 1 && o.column == b.column ).length > 0)
                retorno = true;
        });

        return retorno;
    }

    function embedBlock() {
        let block = blockArea.pop();
        
        block.forEach(b => {
            embeddedBlocks.push({ line: b.line, color: b.color, column : b.column }); 
        });
    }

    function newBlock() {
        add(randomBlock());
        show();
    }

    function randomBlock() {

        actualBlock.type = Math.floor(Math.random() * templateBlock.length);

        let blockType = getType();

        actualBlock.form = Math.floor(Math.random() * blockType.length);

        return { blockForm: getForm(blockType), colorBlock: getColor() };
    }

    function restartInitialPosition() {
        game.initialPosition.column = 3;
        game.initialPosition.line = 2;
    }

    function getColor() {
        return templateColor[actualBlock.type];
    }

    function getType() {
        return templateBlock[actualBlock.type];
    }

    function getForm(block) {
        return block[actualBlock.form];
    }

    return {
        modify,
        move,
        newBlock
    }
}

export default blockModule();
