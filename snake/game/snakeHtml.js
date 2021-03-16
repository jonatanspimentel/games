import { attr, snakeLenght } from './config.js';

import css from './css.js';
import snakeModule from './snakeModule.js';


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

        addNextMoveHtml(snakeModule.getSnakeHead());
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