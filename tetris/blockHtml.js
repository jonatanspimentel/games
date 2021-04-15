import css from "./css.js";

function blockHtml() {

    function addFragment(blockFragment) {
        css.addClassAttrById(`l${blockFragment.line}c${blockFragment.column}`, blockFragment.color);
    }

    function show(block) {
        block.forEach(function (p) { addFragment(p); });
    }

    function remove(block) {
        block.forEach(b => { 
            css.removeClassAttrById(`l${b.line}c${b.column}`, b.color);
        });
    }

    return {
        show,
        remove
    }
}

export default blockHtml();