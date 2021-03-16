import dataHtml from './dataHtml.js';
import { config, control } from './config.js'

function commandModule() {

    function getCommand(command) {
        
        switch(command) {

            case config.key.ArrowUp:
                walk2Up();
                break;

            case config.key.ArrowDown:
                walk2Down();
                break;
    
            case config.key.ArrowLeft:
                walk2Left();
                break;
    
            case config.key.ArrowRight:
                walk2Right();
                break;
    
            case config.key.P:
                pause();
                break
    
            case config.key.Escape:
                end();
                break
            
        }
    }

    function walk2Up() {
        if(control.direction !== config.key.ArrowDown)
            control.direction = config.key.ArrowUp;
    }

    function walk2Down() {
        if(control.direction !== config.key.ArrowUp)
            control.direction = config.key.ArrowDown;
    }

    function walk2Left() {
        if(control.direction !== config.key.ArrowRight)
            control.direction = config.key.ArrowLeft;
    }

    function walk2Right() {
        if(control.direction !== config.key.ArrowLeft)
            control.direction = config.key.ArrowRight;
    }

    function pause() {
        control.pause = !control.pause;
        control.status = (control.pause) ? config.status.Paused : config.status.Running;
        dataHtml.addStatusHtml();
    }

    function end() {
        control.endGame = true;
        control.status = config.status.EndGame;
        dataHtml.addStatusHtml();
    }

    return {
        getCommand
    }
}

export default commandModule();