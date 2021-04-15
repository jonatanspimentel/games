import { control } from './config.js';

import commandModule from '../modules/commandModule.js'
import game from './game.js'; 

function createGame() {
    
    function getCommand(command) {
        commandModule.getCommand(command)
    }

    return {
        getCommand
    }
}

function createKeyboardListener() {
    const state = {
        observers: []
    }

    function subscribe(observerFunction) {
        state.observers.push(observerFunction);
    }

    function notifyAll(command) {
        for (const observerFunction of state.observers) {
            observerFunction(command);
        }
    }

    document.addEventListener('keydown', handleKeydown);

    function handleKeydown(event) {        
        notifyAll(event.key);
    }

    return { 
        subscribe
    }
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
  
async function infinitLoop() {

    while(!control.endGame) {
        
        await sleep(control.speed);
        
        if (!control.pause)
            game.walk();
    }
}

game.start();
game.startHtml();

const gamePromisse = createGame();
const keyboardListener = createKeyboardListener();

keyboardListener.subscribe(gamePromisse.getCommand);

infinitLoop();