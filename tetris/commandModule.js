
import { control, game } from './config.js'

function commandModule() {

    function getCommand(command) {
        
        switch(command) {

            case control.ArrowUp:
                changePosition();
                break;
   
            case control.ArrowLeft:
                move2Left();
                break;
    
            case control.ArrowRight:
                move2Right();
                break;
    
            case control.P:
                pause();
                break
    
            case control.Escape:
                end();
                break
            
        }
    }

    function changePosition() {
        alert("alterando a posição");
    }

    function move2Left() {
        //verificar se há espaço à esquerda
        alert("movendo à esquerda");
    }

    function move2Right() {
        //verificar se há espaço à direita
        alert("movendo à direita");
    }

    function pause() {
        alert("jogo pausado");
        game.state.endGame = !game.state.endGame;
    }

    function end() {
        alert("fim de jogo");
        game.state.endGame = true;
    }

    return {
        getCommand
    }
}

export default commandModule();