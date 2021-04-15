import { config, control, target } from '../game/config.js'

function targetModule() {

    function capture() {
        
        let t = {
            line: target.line,
            column: target.column
        }

        control.captured.push(t);
    }

    function createTarget() {
        target.line = randomNumber();
        target.column = randomNumber();
    }
    
    function randomNumber() {
        return Math.floor(Math.random() * config.size);
    }

return {
        capture,
        createTarget
    }
}

export default targetModule();