import { control } from '../game/config.js';

function dataModule() {

    function addPoint() {
        control.score++;
    }

    return {
        addPoint
    }
}

export default dataModule();