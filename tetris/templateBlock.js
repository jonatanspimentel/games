
import { attr } from "./config.js"

export const templateBlock =
    [
        //#region iBlock
        [
            // [
            //     { line: -3, columns: [0] },
            //     { line: -3, columns: [0] },
            //     { line: 1, columns: [0] },
            //     { line: 0, columns: [0] }
            // ],
            [
                { line: 0, columns: [-2, -1, 0, 1] }
            ],
        ],
        //#endregion iBlock
        //#region jBlock
        [
            [
                { line: -2, columns: [0] },
                { line: -1, columns: [0] },
                { line: 0, columns: [-1, 0] }
            ],
            [
                { line: -1, columns: [-1] },
                { line: 0, columns: [-1, 0, 1] }
            ],
            [
                { line: -2, columns: [-1, 0] },
                { line: -1, columns: [-1] },
                { line: 0, columns: [-1] }
            ],
            [
                { line: -1, columns: [-1, 0, 1] },
                { line: 0, columns: [1] }
            ],
        ],
        //#endregion jBlock
        //#region lBlock
        [
            [
                { line: -2, columns: [0] },
                { line: -1, columns: [0] },
                { line: 0, columns: [0, 1] }
            ],
            [
                { line: -1, columns: [1] },
                { line: 0, columns: [-1, 0, 1] }
            ],
            [
                { line: -2, columns: [-1, 0] },
                { line: -1, columns: [0] },
                { line: 0, columns: [0] }
            ],
            [
                { line: -1, columns: [-1, 0, 1] },
                { line: 0, columns: [-1] }
            ],
        ],
        //#endregion lBlock
        //#region oBlock
        [
            [
                { line: -1, columns: [0, 1] },
                { line: 0, columns: [0, 1] }
            ],
        ],
        //#endregion oBlock
        //#region sBlock
        [
            [
                { line: -1, columns: [0, 1] },
                { line: 0, columns: [-1, 0] }
            ],
            [
                { line: -2, columns: [-1] },
                { line: -1, columns: [-1, 0] },
                { line: 0, columns: [0] }
            ],
        ],
        //#endregion sBlock
        //#region tBlock
        [
            [
                { line: -1, columns: [-1, 0, 1] },
                { line: 0, columns: [0] },
            ],
            [
                { line: -2, columns: [0] },
                { line: -1, columns: [-1, 0] },
                { line: 0, columns: [0] }
            ],
            [
                { line: -1, columns: [0] },
                { line: 0, columns: [-1, 0, 1] },
            ],
            [
                { line: -2, columns: [0] },
                { line: -1, columns: [0, 1] },
                { line: 0, columns: [0] }
            ],
        ],
        //#endregion tBlock
        //#region zBlock
        [
            [
                { line: -1, columns: [-1, 0] },
                { line: 0, columns: [0, 1] }
            ],
            [
                { line: -2, columns: [0] },
                { line: -1, columns: [-1, 0] },
                { line: 0, columns: [-1] }
            ],
            //
        ]
        //#endregion zBlock
    ]

export const templateColor =
    [
        attr.class.iBlock ,
        attr.class.jBlock,
        attr.class.lBlock,
        attr.class.oBlock,
        attr.class.sBlock,
        attr.class.tBlock,
        attr.class.zBlock
    ]