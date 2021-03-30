import css from './css.js';
import { area }  from './config.js';

function areaHtml() {

    function createAreaHtml() {
        for (let line = 0; line < area.size.maxLines; line++)
            for (let column = 0; column < area.size.maxColumns; column++) {
                container.appendChild(css.addElementHtml("div", [{ name: "id", value: `l${line}c${column}` }]));
            }
    }

    return {
        createAreaHtml
    }
}

export default areaHtml();