export const attr = {
    class: {
        iBlock: "iblock",
        jBlock: "jblock",
        lBlock: "lblock",
        oBlock: "oblock",
        sBlock: "sblock",
        tBlock: "tblock",
        zBlock: "zblock"
    }
}

export const area = {
    size: {
        maxColumns: 10,
        maxLines: 20
    }
}

export const game = {
    initialPosition:
    {
        column: 3,
        line: 2
    },
    speed: 200,
    state: {
        endGame: false,
        pause: false
    }
}

export const control = {
    ArrowUp: "ArrowUp",
    ArrowLeft: "ArrowLeft",
    ArrowRight: "ArrowRight",
    Escape: "Escape",
    P: "p"
}

export const moveTo = {
    Down: 1,
    Left: -1,
    Right: 1
}

export let blockArea = [];

export let actualBlock = {
    type: undefined,
    form: undefined
}

export let embeddedBlocks = [];