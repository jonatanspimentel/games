import { snakeLenght, config, control } from './config.js'

function snakeModule () {

    function acelerate() {
        control.speed = (control.speed > config.maxSpeed) ? (control.speed - 10) : control.speed;
    }

    function addNextMove() {

        let snakeHead = getSnakeHead();
        let nextMove = { line: 0, column: 0 }

        switch (control.direction) {
            case config.key.ArrowDown:
                nextMove.line = snakeHead.line + 1;
                nextMove.column = snakeHead.column;
            break;

            case config.key.ArrowLeft:
                nextMove.line = snakeHead.line;
                nextMove.column = snakeHead.column - 1;
            break;

            case config.key.ArrowRight:
                nextMove.line = snakeHead.line;
                nextMove.column = snakeHead.column + 1;
            break;
            
            case config.key.ArrowUp:
                nextMove.line = snakeHead.line - 1;
                nextMove.column = snakeHead.column;
            break;                
        }

        increaseLenght(nextMove);
    }

    function createSnake() {
        increaseLenght({line: 10, column: 21});
        increaseLenght({line: 11, column: 21});
    }

    function incorporate() {
        if (control.captured.length > 0 && control.captured[0].line == snakeLenght[0].line && control.captured[0].column == snakeLenght[0].column) {
            control.captured.pop();
        } else {
            return removeLenght();
        }
    }

    function increaseLenght(nextMove) {
        snakeLenght.push(nextMove);
    }

    function removeLenght(){
        return snakeLenght.shift();
    }

    function getSnakeHead() {
        return snakeLenght[snakeLenght.length - 1];
    }

    return {
        acelerate,
        addNextMove,
        createSnake,
        getSnakeHead,
        incorporate,
        removeLenght
    }
}

export default snakeModule();