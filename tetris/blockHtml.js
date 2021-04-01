import css from "./css.js";

function blockHtml() {

    function addFragment(blockFragment) {
        css.addClassAttrById(`l${blockFragment.line}c${blockFragment.column}`, blockFragment.color);
    }

    function add(block) {
        block.forEach(function (p) { addFragment(p); });
    }

    function remove(block) {
        css.removeClassAttrById(`l${block.line}c${block.column}`, block.color);
    }

    return {
        add,
        remove
    }
}

export default blockHtml();