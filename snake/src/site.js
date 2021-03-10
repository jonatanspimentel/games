function createGame() {

    function move(command) {
        switch(command) {

            case config.key.ArrowUp:
                if(direcaoAtual === config.key.ArrowLeft || direcaoAtual === config.key.ArrowRight)
                    direcaoAtual = config.key.ArrowUp;
                break;
    
            case config.key.ArrowDown:
                if(direcaoAtual === config.key.ArrowLeft || direcaoAtual === config.key.ArrowRight)
                    direcaoAtual = config.key.ArrowDown;
                break;
    
            case config.key.ArrowLeft:
                if(direcaoAtual === config.key.ArrowUp || direcaoAtual === config.key.ArrowDown)
                    direcaoAtual = config.key.ArrowLeft;
                break;
    
            case config.key.ArrowRight:
                if(direcaoAtual === config.key.ArrowUp || direcaoAtual === config.key.ArrowDown)
                    direcaoAtual = config.key.ArrowRight;
                break;
    
            case config.key.P:
                if (!controle.fimDeJogo)
                    controle.pause = !controle.pause;
                break
    
            case config.key.Escape:
                controle.fimDeJogo = true;
                break
            
        }
    }

    return  {
        move
    }
}

const game = createGame();
const keyboardListener = createKeyboardListener();
keyboardListener.subscribe(game.move);

function createKeyboardListener(){
    const state = {
        observers: []
    }

    function subscribe(observerFunction) {
        state.observers.push(observerFunction);
    }

    function notifyAll(command) {
        for (const observerFunction of state.observers) {
            observerFunction(command);
        }
    }

    document.addEventListener('keydown', handleKeydown);

    function handleKeydown(event) {        
        notifyAll(event.key);
    }

    return { 
        subscribe
    }

}

const config = {
    area: [],
    size: 40,
    key: {
        Escape: "Escape",
        ArrowLeft: "ArrowLeft",
        ArrowUp: "ArrowUp",
        ArrowRight: "ArrowRight",
        ArrowDown: "ArrowDown",
        P: "p"
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
var direcaoAtual = config.key.ArrowDown;

class Snake {
    
    constructor(){
        this.arrayPosition.push([10, 22]);
        this.arrayPosition.push([10, 21]);
    }

    arrayPosition = [];

    andar() {

        reposicionarSnake();

        var last = this.arrayPosition[this.arrayPosition.length - 1];
        let linha = 0;
        let coluna = 0;
        
        if (direcaoAtual === config.key.ArrowDown) {
            //regra de negócio
            linha = last[0] + 1;
            coluna = last[1];
        }

        if (direcaoAtual === config.key.ArrowLeft) {
            linha = last[0];
            coluna = last[1] - 1;
        }

        if (direcaoAtual === config.key.ArrowRight) {
            linha = last[0];
            coluna = last[1] + 1;
        }

        if (direcaoAtual === config.key.ArrowUp) {
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

function reposicionarSnake() {
    removerClassePorId(`l${snake.arrayPosition[0][0]}c${snake.arrayPosition[0][1]}`, atributosVisuais.classe.snake);
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

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
  
async function infinitLoop() {

    while(!controle.fimDeJogo) {
        
        await sleep(velocidadeMs);
        
        if (!controle.pause)
            snake.andar(direcaoAtual);
    }
}

infinitLoop();
