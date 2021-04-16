import { attr, target } from '../game/config.js';
import css from '../css.js';

function targetHtml() {

    function add() {
        css.addClassAttrById(`l${target.line}c${target.column}`, attr.class.target);
    }

    function remove() {
        css.removeClassAttrById(`l${target.line}c${target.column}`, attr.class.target);
    }

    return {
        add,
        remove
    }
}

export default targetHtml();