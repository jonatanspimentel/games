import css from './css.js'; 
import { config } from './config.js'

function areaHtml() {
    
    function createAreaHtml() {
        
        for(let line = 0; line < config.size; line++)
            for(let column = 0; column < config.size; column++){
                container.appendChild(css.addElementHtml("div", [{ name: "id", value: `l${line}c${column}`}]));
            }

    }
    
    return {
        createAreaHtml
    }
}

export default areaHtml();