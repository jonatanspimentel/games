import { control } from './config.js';

function dataHtml() {
   
    function addScoreHtml() {
        let scoreElement = document.getElementsByTagName("p")[0];
        scoreElement.innerHTML = `Score: ${ control.score }`;
    }

    function addSpeedHtml() {
        let speedElement = document.getElementsByTagName("p")[1];
        speedElement.innerHTML = `Speed: ${ control.speed } <i>(milliseconds)</i>`;
    }

    function addStatusHtml() {
        let statusElement = document.getElementsByTagName("p")[2];
        statusElement.innerHTML = `${ control.status }`;
    }

    return {
        addScoreHtml,
        addSpeedHtml,
        addStatusHtml
    }
}

export default dataHtml();