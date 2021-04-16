import { attr, snakeLenght } from '../game/config.js';

import css from '../css.js';
import snakeModule from '../modules/snakeModule.js';


function snakeHtml() {

    function addMove(nextMove) {
        css.addClassAttrById(`l${nextMove.line}c${nextMove.column}`, attr.class.snake);
    }

    function create() {
        snakeLenght.forEach(function (s) {
            addMove(s);
        });
    }

    function refreshRouteHtml(removed) {  
        if (removed !== undefined)
            remove(removed);

        addMove(snakeModule.getLast());
    }

    function remove(removed) {
        css.removeClassAttrById(`l${removed.line}c${removed.column}`, attr.class.snake);
    }

    return {
        create,
        refreshRouteHtml
    }
}

export default snakeHtml();