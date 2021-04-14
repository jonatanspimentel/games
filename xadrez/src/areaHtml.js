import css from './css.js';
import { attr }  from './config.js';

function areaHtml() {

    function create() {
        for (let line = 0; line < 8; line++)
            for (let column = 0; column < 8; column++) {
                
                let cssClass = attr.class.white;

                if ((line + (column + 1)) % 2 === 0)
                    cssClass = attr.class.black;

                let attributes = [{ name: "id", value: `l${line}c${column}` }, 
                                  { name: "class", value: cssClass }];

                let element = css.addHtmlElement("div", attributes);
                container.appendChild(element);
            }
    }

    return {
        create
    }
}

export default areaHtml();