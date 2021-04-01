
import blockModule from './blockModule.js';
import blockHtml from './blockHtml.js';
import { blockArea, control, game, moveTo } from './config.js'

function commandModule() {

    function getCommand(command) {

        switch (command) {

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

        blockHtml.remove(blockArea[blockArea.length - 1]);
        let form = blockModule.changeForm();
        blockModule.add(form, 'jblock');
        blockHtml.add(blockArea[blockArea.length - 1]);
    }

    function move2Left() {
        //TODO: espaço à esquerda
        blockModule.move(moveTo.Left);
    }

    function move2Right() {
        //TODO: espaço à direita
        blockModule.move(moveTo.Right);
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