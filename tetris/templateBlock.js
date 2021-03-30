
import {attr} from "./config.js"

export const templateBlocks = {
    iBlock: {
        formA:
            [
                { line: -2, blocks: [0] },
                { line: -1, blocks: [0] },
                { line: 0, blocks: [0] },
                { line: 1, blocks: [0] }
            ],
        formB:
            [
                { line: 0, blocks: [-2, -1, 0, 1] }
            ],
        color: attr.class.iBlock
    },

    jBlock: {
        formA:
            [
                { line: -2, blocks: [0] },
                { line: -1, blocks: [0] },
                { line: 0, blocks: [-1, 0] }
            ],

        formB:
            [
                { line: -1, blocks: [-1] },
                { line: 0, blocks: [-1, 0, 1] }
            ],

        formC:
            [
                { line: -2, blocks: [-1, 0] },
                { line: -1, blocks: [-1] },
                { line: 0, blocks: [-1] }
            ],

        formD:
            [
                { line: -1, blocks: [-1, -0, 1] },
                { line: 0, blocks: [1] }
            ],
        color: attr.class.jBlock
    },
    oBlock: {
        formA:
            [
                { line: 0, blocks: [0, 1] },
                { line: 1, blocks: [0, 1] }
            ],
        color: attr.class.oBlock
    },

    sBlock: {
        formA:
            [
                { line: 0, blocks: [0, 1] },
                { line: 1, blocks: [-1, 0] }
            ],
        formB:
            [
                { line: -1, blocks: [-1] },
                { line: 0, blocks: [-1, 0] },
                { line: 1, blocks: [0] }
            ],
        color: attr.class.sBlock
    },
    tBlock: {
        formA:
            [
                { line: 0, blocks: [-1, 0, 1] },
                { line: 1, blocks: [0] },
            ],

        formB:
            [
                { line: -1, blocks: [0] },
                { line: 0, blocks: [-1, 0] },
                { line: 1, blocks: [0] }
            ],

        formC:
            [
                { line: 0, blocks: [0] },
                { line: 1, blocks: [-1, 0, 1] },
            ],
        formD:
            [
                { line: -1, blocks: [0] },
                { line: 0, blocks: [0, 1] },
                { line: 1, blocks: [0] }
            ],
        color: attr.class.tBlock
    },
    zBlock: {
        formA:
            [
                { line: 0, blocks: [-1, 0] },
                { line: 1, blocks: [0, 1] }
            ],

        formB:
            [
                { line: -1, blocks: [0] },
                { line: 0, blocks: [-1, 0] },
                { line: 1, blocks: [-1] }
            ],
        color: attr.class.zBlock
    }
}