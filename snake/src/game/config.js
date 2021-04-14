export const config = {
    area: [],
    size: 40,
    key: {
        Escape: "Escape",
        ArrowLeft: "ArrowLeft",
        ArrowUp: "ArrowUp",
        ArrowRight: "ArrowRight",
        ArrowDown: "ArrowDown",
        P: "p"
    },
    status: {
        EndGame: "Fim de Jogo",
        Paused: "Pausado",
        Running: "Em execução"
    },
    maxSpeed: 40
};

export const control = {
    direction: undefined,
    captured: [],
    speed: 350,
    score: 0, 
    status: undefined,
    endGame: false,
    pause: false
}

export const attr = {
    class: {
        target: "target",
        snake: "snake", 
    }
}

export const target = {
    line: null,
    column: null
};

export let snakeLenght = [];