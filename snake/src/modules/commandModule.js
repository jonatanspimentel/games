import dataHtml from '../html/dataHtml.js';
import { control, game } from '../game/config.js'

function commandModule() {

    function getCommand(command) {
        
        switch(command) {

            case control.ArrowUp:
                walk2Up();
                break;

            case control.ArrowDown:
                walk2Down();
                break;
    
            case control.ArrowLeft:
                walk2Left();
                break;
    
            case control.ArrowRight:
                walk2Right();
                break;
    
            case control.P:
                pause();
                break
    
            case control.Escape:
                end();
                break
            
        }
    }

    function walk2Up() {
        if(game.direction !== control.ArrowDown)
            game.direction = control.ArrowUp;
    }

    function walk2Down() {
        if(game.direction !== control.ArrowUp)
            game.direction = control.ArrowDown;
    }

    function walk2Left() {
        if(game.direction !== control.ArrowRight)
            game.direction = control.ArrowLeft;
    }

    function walk2Right() {
        if(game.direction !== control.ArrowLeft)
            game.direction = control.ArrowRight;
    }

    function pause() {
        game.state.pause = !game.state.pause;
        //control.status = (control.pause) ? config.status.Paused : config.status.Running;
        dataHtml.addStatusHtml();
    }

    function end() {
        game.state.endGame = true;
        //control.status = config.status.EndGame;
        dataHtml.addStatusHtml();
    }

    return {
        getCommand
    }
}

export default commandModule();