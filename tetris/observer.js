//import commandModule from './commandModule.js'
//import game from './game.js'; 
import { game } from './config.js';

function createGame() {
    
    function getCommand(command) {
        //commandModule.getCommand(command)
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

    while(!game.endGame) {
        
        await sleep(game.speed);
        
        //if (!game.pause)
            //game.walk();
    }
}

//game.start();
//game.startHtml();

const gamePromisse = createGame();
const keyboardListener = createKeyboardListener();

keyboardListener.subscribe(gamePromisse.getCommand);

//infinitLoop();