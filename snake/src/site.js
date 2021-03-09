
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
    velocidadeMsMaxima: 80
};

const controle = {
    proximoMovimento: [],
    fimDeJogo: false,
    pause: false
}

const atributosVisuais = {
    classe: {
        mouse: "mouse",
        snake: "snake", 
    }
}

var pontuacao = 0;
var crescimentoPendente = false;
var velocidadeMs = 350;
var rato = [];
var direcaoAtual = config.tecla.baixo;

class Snake {
    
    constructor(){
        this.arrayPosition.push([10, 22]);
        this.arrayPosition.push([10, 21]);
    }

    arrayPosition = [];

    mover() {

        destruirSnake();

        var last = this.arrayPosition[this.arrayPosition.length - 1];
        let linha = 0;
        let coluna = 0;
        
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
        removerClassePorId(`l${rato[0]}c${rato[1]}`, atributosVisuais.classe.mouse);

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

    for(let linha = 0; linha < config.size; linha++) {
        for(let coluna = 0; coluna < config.size; coluna++)
            container.appendChild(novoBloco(linha, coluna));
    }
}

function construirContainer(){

    //adicionar mouse
    adicionarClassePorId(`l${rato[0]}c${rato[1]}`, atributosVisuais.classe.mouse);

    //adicionar snake
    snake.arrayPosition.forEach(function(s) {
        adicionarClassePorId(`l${s[0]}c${s[1]}`, atributosVisuais.classe.snake);
    });
}

function destruirSnake() {
    //apagar os elementos de snake
    snake.arrayPosition.forEach(function(s) {
        removerClassePorId(`l${s[0]}c${s[1]}`, atributosVisuais.classe.snake);
    });
}

function removerClassePorId(id, classe) {
    var element = document.getElementById(id);
    element.classList.remove(classe);
}

function adicionarClassePorId(id, classe) {
    var element = document.getElementById(id);
    element.classList.add(classe);
}

function novoBloco(linha, coluna) {
    
    let cell = document.createElement("div");
    addAttribute(cell, "id", `l${linha}c${coluna}`);
    return cell;

    function addAttribute(element, attr, value) {
        element.setAttribute(attr, value);
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