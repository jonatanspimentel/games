import css from "./css.js";

function blockHtml() {

    function addHtmlFragment(blockFragment) {
        css.addClassAttrById(`l${blockFragment.line}c${blockFragment.column}`, blockFragment.color);
    }

    function addBlockHtml(block) {
        block.forEach(function (p) { addHtmlFragment(p); });
    }

    function remove(block) {
        css.removeClassAttrById(`l${block.line}c${block.column}`, block.color);
    }

    return {
        addBlockHtml,
        remove
    }
}

export default blockHtml();