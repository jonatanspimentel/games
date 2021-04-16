import { attr, snakeLenght } from '../game/config.js';

import css from '../css.js';
import snakeModule from '../modules/snakeModule.js';


function snakeHtml() {

    function addNextMoveHtml(nextMove) {
        css.addClassAttrById(`l${nextMove.line}c${nextMove.column}`, attr.class.snake);
    }

    function createSnakeHtml() {
        snakeLenght.forEach(function (s) {
            addNextMoveHtml(s);
        });
    }

    function refreshRouteHtml(removed) {  
        if (removed !== undefined)
            refreshSnakeHtml(removed);

        addNextMoveHtml(snakeModule.getHead());
    }

    function refreshSnakeHtml(removed) {
        css.removeClassAttrById(`l${removed.line}c${removed.column}`, attr.class.snake);
    }

    return {
        createSnakeHtml,
        refreshRouteHtml
    }
}

export default snakeHtml();