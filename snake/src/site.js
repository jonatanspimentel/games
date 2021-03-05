
const config = {
    area: [],
    size: 40,
    direcao: {
        esquerda: 37,
        cima: 38,
        direita: 39,
        baixo: 40
    },
    velocidadeMsMaxima: 20
};

const controle = {
    proximoMovimento: []
}

var pontuacao = 0;
var crescer = false;
var velocidadeMs = 100;
var rato = [];
var direcaoAtual = config.direcao.baixo;

class Snake {
    
    constructor(){
        this.arrayPosition.push([10, 22]);
        this.arrayPosition.push([10, 21]);
    }

    arrayPosition = [];

    mover() {

        destruirContainer();

        let last = this.arrayPosition[this.arrayPosition.length - 1];
        linha = 0;
        coluna = 0;
        
        if (direcaoAtual === config.direcao.baixo) {
            linha = last[0] + 1;
            coluna = last[1];
        }

        if (direcaoAtual === config.direcao.esquerda) {
            linha = last[0];
            coluna = last[1] - 1;
        }

        if (direcaoAtual === config.direcao.direita) {
            linha = last[0];
            coluna = last[1] + 1;
        }

        if (direcaoAtual === config.direcao.cima) {
            linha = last[0] - 1;
            coluna = last[1];
        }

        controle.proximoMovimento.push([linha, coluna]);

        this.crescer();
        this.capturarORato(linha, coluna);
        this.atualizarPercurso();

        construirContainer();

    }

    capturarORato(linha, coluna) { 

        if (linha == rato[0] && coluna == rato[1]){
            
            crescer = true;

            pontuar();
            novoRato();
            this.aumentarVelocidade();
            
        }
    }

    crescer(linha, coluna) {
        if (crescer && !(snake.arrayPosition.includes([linha, coluna]))) {
            snake.arrayPosition.push([linha, coluna])
            crescer = false;
        }
    }

    atualizarPercurso() {
        this.arrayPosition.push(controle.proximoMovimento.pop());
        this.arrayPosition.shift()
    }

    aumentarVelocidade() {
        if (velocidadeMs > config.velocidadeMsMaxima)
            velocidadeMs = velocidadeMs - 10;
    }
}

const snake = new Snake();

function novoRato() {
    
    if (rato.length > 0)
        config.area[rato[0]][rato[1]] = "";

    linha = randomNumber();
    coluna = randomNumber();
    
    rato = [linha, coluna];
    config.area[linha][coluna] = "mse";

    function randomNumber(){
        return Math.floor(Math.random() * config.size);
    }
}

function pontuar() {
    pontuacao++;
    let pontuacaoElement = document.getElementsByTagName("p");
    pontuacaoElement.innerHTML = pontuacao;
}

construirArea();
novoRato();

//#region Elements

function construirArea() { 
    
    for(let i = 0; i < config.size; i++) {

        config.area[i] = new Array(config.size);

        for(let j = 0; j < config.size; j++) {
            if((i + j + 1) % 2 == 0)
                config.area[i][j] = "dif";
        }
    }
}

function construirContainer(){

    for(let linha = 0; linha < config.area.length; linha++) {

        let line = newRow();
        let row = config.area[linha];

        for(let coluna = 0; coluna < row.length; coluna++)
            line.appendChild(newCell(linha, coluna));

        container.appendChild(line);
    }
}

function destruirContainer() {
    let container = document.getElementById("container");
    container.innerHTML = "";
}

function newRow() {
    let row = document.createElement("div");
    row.setAttribute("class", "row");
    return row;
}

function newCell(linha, coluna) {
    
    let cell = document.createElement("div");
    cell.setAttribute("class", classValue());
    return cell;

    function classValue() {
    
        let result = "";

        for(let i = 0; i < snake.arrayPosition.length; i ++) {
            
            if(snake.arrayPosition[i][0] == linha && snake.arrayPosition[i][1] == coluna){
                result = "snk"; 
                break;
            }
            else { 
                result = config.area[linha][coluna];
            }
        }

        return result;
    }
}

//#endregion

//#region Events

document.onkeydown = function (e) {
    
    switch(e.which) {

        case config.direcao.cima:
            if(direcaoAtual === config.direcao.esquerda || direcaoAtual === config.direcao.direita)
                direcaoAtual = config.direcao.cima;
            break;

        case config.direcao.baixo:
            if(direcaoAtual === config.direcao.esquerda || direcaoAtual === config.direcao.direita)
                direcaoAtual = config.direcao.baixo;
            break;

        case config.direcao.esquerda:
            if(direcaoAtual === config.direcao.cima || direcaoAtual === config.direcao.baixo)
                direcaoAtual = config.direcao.esquerda;
            break;

        case config.direcao.direita:
            if(direcaoAtual === config.direcao.cima || direcaoAtual === config.direcao.baixo)
                direcaoAtual = config.direcao.direita;
            break;
    }
};

//#endregion

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
  
async function infinite() {
    while(true) {
        await sleep(velocidadeMs);
        snake.mover(direcaoAtual);
    }
}

infinite();