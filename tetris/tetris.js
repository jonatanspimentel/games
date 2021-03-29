
const config = {
    maxColumns: 10,
    maxLines: 20
};

let pieceArea = [];

const attr = {
    class: {
        piece: "piece"
    }
}

//#region Area
function createAreaHtml() {
for (let line = 0; line < config.maxLines; line++)
    for (let column = 0; column < config.maxColumns; column++) {
        container.appendChild(addElementHtml("div", [{ name: "id", value: `l${line}c${column}` }]));
    }
}
//#endregion Area

//#region Css
function addClassAttrById(id, className) {
    let element = document.getElementById(id);
    element.classList.add(className);
}

function addElementHtml(elementName, atributeArray) {
    let element = document.createElement(elementName);

    atributeArray.forEach(attr => {
        addAttribute(element, attr.name, attr.value);
    });

    return element;
}

function addAttribute(element, name, value) {
    element.setAttribute(name, value);
}

function removeClassAttrById(id, className) {
    let element = document.getElementById(id);
    element.classList.remove(className);
}

//#endregion Css

//#region Module
function createPiece(){
    increase({line: 16, column: 6});
    increase({line: 16, column: 7});
    increase({line: 17, column: 5});
    increase({line: 17, column: 6});
}

function increase(piece) {
    pieceArea.push(piece);
}

//#endregion Module

//#region Html

function addHtml(nextMove) {
    addClassAttrById(`l${nextMove.line}c${nextMove.column}`, attr.class.piece);
}

function addPieceHtml() {
    pieceArea.forEach(function (p) { addHtml(p); });
}

//#endregion Html

//#region Game
//data
createPiece();
//html
createAreaHtml();
addPieceHtml();
//#endregion Game
