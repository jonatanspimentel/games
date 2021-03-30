export const attr = {
    class: {
        iBlock: "iblock",
        jBlock: "jblock",
        oBlock: "oblock",
        sBlock: "sblock",
        tBlock: "tblock",
        zBlock: "zblock"
    }
}

export const config = {
    maxColumns: 10,
    maxLines: 20
}

export const game = {
    
    initialColumn: 6,
    initialLine: 2,
    
    speed: 300,
    state: {
        endGame: false,
        pause: false
    },

}

export let pieceArea = [];