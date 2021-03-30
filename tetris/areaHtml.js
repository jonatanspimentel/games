import css from './css.js';
import { config}  from './config.js';

function areaHtml() {

    function createAreaHtml() {
        for (let line = 0; line < config.maxLines; line++)
            for (let column = 0; column < config.maxColumns; column++) {
                container.appendChild(css.addElementHtml("div", [{ name: "id", value: `l${line}c${column}` }]));
            }
    }

    return {
        createAreaHtml
    }
}

export default areaHtml();