
import { attr } from "./config.js"

export const templateBlock =
    [
        //#region iBlock
        [
            [
                { line: -2, columns: [0] },
                { line: -1, columns: [0] },
                { line: 0, columns: [0] },
                { line: 1, columns: [0] }
            ],
            [
                { line: 0, columns: [-2, -1, 0, 1] }
            ],
            //color: attr.class.iBlock
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
            //color: attr.class.jBlock
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
            //color: attr.class.jBlock
        ],
        //#endregion Block
        //#region oBlock
        [
            [
                { line: 0, columns: [0, 1] },
                { line: 1, columns: [0, 1] }
            ],
            //color: attr.class.oBlock
        ],
        //#endregion oBlock
        //#region sBlock
        [
            [
                { line: 0, columns: [0, 1] },
                { line: 1, columns: [-1, 0] }
            ],
            [
                { line: -1, columns: [-1] },
                { line: 0, columns: [-1, 0] },
                { line: 1, columns: [0] }
            ],
            //color: attr.class.sBlock
        ],
        //#endregion sBlock
        //#region tBlock
        [
            [
                { line: 0, columns: [-1, 0, 1] },
                { line: 1, columns: [0] },
            ],
            [
                { line: -1, columns: [0] },
                { line: 0, columns: [-1, 0] },
                { line: 1, columns: [0] }
            ],
            [
                { line: 0, columns: [0] },
                { line: 1, columns: [-1, 0, 1] },
            ],
            [
                { line: -1, columns: [0] },
                { line: 0, columns: [0, 1] },
                { line: 1, columns: [0] }
            ],
            //color: attr.class.tBlock
        ],
        //#endregion tBlock
        //#region zBlock
        [
            [
                { line: 0, columns: [-1, 0] },
                { line: 1, columns: [0, 1] }
            ],
            [
                { line: -1, columns: [0] },
                { line: 0, columns: [-1, 0] },
                { line: 1, columns: [-1] }
            ],
            //color: attr.class.zBlock
        ]
        //#endregion zBlock
    ]