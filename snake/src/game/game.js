import { control, game, target } from './config.js';

import dataModule from '../modules/dataModule.js'; 
import snakeModule from '../modules/snakeModule.js'
import targetModule from '../modules/targetModule.js';

import areaHtml from '../html/areaHtml.js';
import dataHtml from '../html/dataHtml.js';
import snakeHtml from '../html/snakeHtml.js';
import targetHtml from '../html/targetHtml.js';


function gameModule() {

    function walk() {
        
        snakeModule.add();
        captureTarget();

        let retorno = snakeModule.incorporate();
        snakeHtml.refreshRouteHtml(retorno);
        
    }

    function captureTarget() { 

        let lastIndexSnake = snakeModule.getHead();

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
        game.direction = control.ArrowDown;
        snakeModule.create();
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

export default gameModule();