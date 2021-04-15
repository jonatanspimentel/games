import { game } from '../game/config.js';

function dataModule() {

    function addPoint() {
        game.score++;
    }

    return {
        addPoint
    }
}

export default dataModule();