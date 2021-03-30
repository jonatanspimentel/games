import commandModule from './commandModule.js'

function observerModule() {

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

    return {
        createGame,
        createKeyboardListener
    }
}

export default observerModule();