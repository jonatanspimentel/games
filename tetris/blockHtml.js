import css from "./css.js";

function blockHtml() {

    function addHtmlFragment(blockFragment) {
        css.addClassAttrById(`l${blockFragment.line}c${blockFragment.column}`, blockFragment.color);
    }

    function addBlockHtml(block) {
        block.forEach(function (p) { addHtmlFragment(p); });
    }

    return {
        addBlockHtml
    }
}

export default blockHtml();