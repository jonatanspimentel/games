export const config = {
    area: [],
    size: 40,
    maxSpeed: 40
};

export const game = {
    direction: undefined,
    score: 0,
    speed: 350,
    state: {
        endGame: false,
        pause: false
    },
    status: undefined
}

export const control = {
    ArrowDown: "ArrowDown",
    ArrowLeft: "ArrowLeft",
    ArrowRight: "ArrowRight",
    ArrowUp: "ArrowUp",
    Escape: "Escape",
    P: "p"
}

export const captured = [];

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