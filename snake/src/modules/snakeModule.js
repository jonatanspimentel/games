import { captured, config, control, game, snakeLenght } from '../game/config.js'

function snakeModule () {

    function acelerate() {
        game.speed = (game.speed > config.maxSpeed) ? (game.speed - 10) : game.speed;
    }

    function add() {

        let snakeHead = getLast();
        let nextMove = { line: 0, column: 0 }

        switch (game.direction) {
            case control.ArrowDown:
                nextMove.line = snakeHead.line + 1;
                nextMove.column = snakeHead.column;
            break;

            case control.ArrowLeft:
                nextMove.line = snakeHead.line;
                nextMove.column = snakeHead.column - 1;
            break;

            case control.ArrowRight:
                nextMove.line = snakeHead.line;
                nextMove.column = snakeHead.column + 1;
            break;
            
            case control.ArrowUp:
                nextMove.line = snakeHead.line - 1;
                nextMove.column = snakeHead.column;
            break;                
        }

        increaseLenght(nextMove);
    }

    function create() {
        increaseLenght({line: 10, column: 21});
        increaseLenght({line: 11, column: 21});
    }

    function incorporate() {
        if (captured.length > 0 && captured[0].line == snakeLenght[0].line && captured[0].column == snakeLenght[0].column) {
            captured.pop();
        } else {
            return remove();
        }
    }

    function increaseLenght(nextMove) {
        snakeLenght.push(nextMove);
    }

    function remove(){
        return snakeLenght.shift();
    }

    function getLast() {
        return snakeLenght[snakeLenght.length - 1];
    }

    return {
        acelerate,
        add,
        create,
        getLast,
        incorporate,
        remove
    }
}

export default snakeModule();