import { attr, target } from './config.js';
import css from './css.js';

function targetHtml() {

    function addTargetHtml() {
        css.addClassAttrById(`l${target.line}c${target.column}`, attr.class.target);
    }

    function removeTargetHtml() {
        css.removeClassAttrById(`l${target.line}c${target.column}`, attr.class.target);
    }

    return {
        addTargetHtml,
        removeTargetHtml
    }
}

export default targetHtml();