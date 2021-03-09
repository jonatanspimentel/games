
const config = {
    area: [],
    size: 40,
    tecla: {
        esc: 27,
        esquerda: 37,
        cima: 38,
        direita: 39,
        baixo: 40,
        P: 80
    },
    velocidadeMsMaxima: 20
};

const controle = {
    proximoMovimento: [],
    fimDeJogo: false,
    pause: false
}

const atributosVisuais = {
    classe: {
        bloco: "bloco",
        mouse: "mouse",
        snake: "snake", 
    }
}

var pontuacao = 0;
var crescimentoPendente = false;
var velocidadeMs = 100;
var rato = [];
var direcaoAtual = config.tecla.baixo;

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
        
        if (direcaoAtual === config.tecla.baixo) {
            linha = last[0] + 1;
            coluna = last[1];
        }

        if (direcaoAtual === config.tecla.esquerda) {
            linha = last[0];
            coluna = last[1] - 1;
        }

        if (direcaoAtual === config.tecla.direita) {
            linha = last[0];
            coluna = last[1] + 1;
        }

        if (direcaoAtual === config.tecla.cima) {
            linha = last[0] - 1;
            coluna = last[1];
        }

        controle.proximoMovimento.push([linha, coluna]);

        this.crescer(linha, coluna);
        this.capturarORato(linha, coluna);
        this.atualizarPercurso();

        construirContainer();

    }

    capturarORato(linha, coluna) { 

        if (linha == rato[0] && coluna == rato[1]) {
            
            crescimentoPendente = true;

            pontuar();
            criarNovoRato();
            this.aumentarVelocidade();
            
        }
    }

    crescer(linha, coluna) {
        if (crescimentoPendente && !(snake.arrayPosition.includes([linha, coluna]))) {
            snake.arrayPosition.push([linha, coluna])
            crescimentoPendente = false;
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

function criarNovoRato() {
    
    if (rato.length > 0)
        config.area[rato[0]][rato[1]] = "";

    linha = randomNumber();
    coluna = randomNumber();
    
    rato = [linha, coluna];
    config.area[linha][coluna] = atributosVisuais.classe.mouse;

    function randomNumber(){
        return Math.floor(Math.random() * config.size);
    }
}

function pontuar() {
    pontuacao++;
    let pontuacaoElement = document.getElementsByTagName("p")[0];
    pontuacaoElement.innerHTML = `Pontuação: ${pontuacao}`;
}

construirArea();
criarNovoRato();

//#region Elements

function construirArea() { 
    
    for(let i = 0; i < config.size; i++) {
        config.area[i] = new Array(config.size);
    }
}

function construirContainer(){

    for(let linha = 0; linha < config.size; linha++) {

        for(let coluna = 0; coluna < config.size; coluna++)
            container.appendChild(newCell(linha, coluna));
    }
}

function destruirContainer() {
    let container = document.getElementById("container");
    container.innerHTML = "";
}

function newCell(linha, coluna) {
    
    let cell = document.createElement("div");
    classValue();
    return cell;

    function classValue() {
    
        for(let i = 0; i < snake.arrayPosition.length; i ++) {
            
            if(snake.arrayPosition[i][0] == linha && snake.arrayPosition[i][1] == coluna){
                cell.setAttribute("class", atributosVisuais.classe.snake);
                break;
            }

            if(rato[0] == linha && rato[1] == coluna){
                cell.setAttribute("class", atributosVisuais.classe.mouse);
                break;
            }
        
        }
    }
}

//#endregion

//#region Events

document.onkeydown = function (e) {
    
    switch(e.which) {

        case config.tecla.cima:
            if(direcaoAtual === config.tecla.esquerda || direcaoAtual === config.tecla.direita)
                direcaoAtual = config.tecla.cima;
            break;

        case config.tecla.baixo:
            if(direcaoAtual === config.tecla.esquerda || direcaoAtual === config.tecla.direita)
                direcaoAtual = config.tecla.baixo;
            break;

        case config.tecla.esquerda:
            if(direcaoAtual === config.tecla.cima || direcaoAtual === config.tecla.baixo)
                direcaoAtual = config.tecla.esquerda;
            break;

        case config.tecla.direita:
            if(direcaoAtual === config.tecla.cima || direcaoAtual === config.tecla.baixo)
                direcaoAtual = config.tecla.direita;
            break;

        case config.tecla.P:
            if (!controle.fimDeJogo)
                controle.pause = !controle.pause;
            break

        case config.tecla.esc:
            controle.fimDeJogo = true;
            break
        
    }
};

//#endregion

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
  
async function infinite() {

    while(!controle.fimDeJogo) {
        
        await sleep(velocidadeMs);
        
        if (!controle.pause)
            snake.mover(direcaoAtual);
    }
}

infinite();