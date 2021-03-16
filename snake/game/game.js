import { config, control, target } from './config.js';

import areaModule from './areaModule.js';
import dataModule from './dataModule.js'; 
import snakeModule from './snakeModule.js'
import targetModule from './targetModule.js';

import areaHtml from './areaHtml.js';
import dataHtml from './dataHtml.js';
import snakeHtml from './snakeHtml.js';
import targetHtml from './targetHtml.js';


function game() {

    function walk() {
        
        snakeModule.addNextMove();
        captureTarget();

        let retorno = snakeModule.incorporate();
        snakeHtml.refreshRouteHtml(retorno);
        
    }

    function captureTarget() { 

        let lastIndexSnake = snakeModule.getSnakeHead();

        if (lastIndexSnake.line == target.line && lastIndexSnake.column == target.column) {
            
            targetModule.capture();
            dataModule.addPoint();

            dataHtml.addScoreHtml();
            
            targetHtml.removeTargetHtml();

            targetModule.createTarget();
            targetHtml.addTargetHtml();

            snakeModule.acelerate();
            dataHtml.addSpeedHtml();

        }
    }

    function start() {
        control.direction = config.key.ArrowDown;
        control.status = config.status.Running;
        areaModule.createArea();
        snakeModule.createSnake();
        targetModule.createTarget();
    }

    function startHtml() {
        areaHtml.createAreaHtml();
        snakeHtml.createSnakeHtml();
        targetHtml.addTargetHtml();
        dataHtml.addSpeedHtml();
    }

    return {
        start,
        startHtml,
        walk
    }
}

export default game();