function createGame() {

    function move(command) {
        switch(command) {

            case config.key.ArrowUp:
                if(controle.direcao === config.key.ArrowLeft || controle.direcao === config.key.ArrowRight)
                    controle.direcao = config.key.ArrowUp;
                break;
    
            case config.key.ArrowDown:
                if(controle.direcao === config.key.ArrowLeft || controle.direcao === config.key.ArrowRight)
                    controle.direcao = config.key.ArrowDown;
                break;
    
            case config.key.ArrowLeft:
                if(controle.direcao === config.key.ArrowUp || controle.direcao === config.key.ArrowDown)
                    controle.direcao = config.key.ArrowLeft;
                break;
    
            case config.key.ArrowRight:
                if(controle.direcao === config.key.ArrowUp || controle.direcao === config.key.ArrowDown)
                    controle.direcao = config.key.ArrowRight;
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
    direcao: config.key.ArrowDown,
    proximoMovimento: [],
    alvoCapturado: [],
    fimDeJogo: false,
    pause: false, 
    velocidadeMs: 350,
    crescimentoPendente = false
}

const atributosVisuais = {
    classe: {
        alvo: "alvo",
        snake: "snake", 
    }
}

var pontos = 0;

var alvo = [];

class Snake {
    
    constructor(){
        this.arrayPosition.push([10, 22]);
        this.arrayPosition.push([10, 21]);
    }

    arrayPosition = [];

    andar() {

        var last = this.arrayPosition[this.arrayPosition.length - 1];
        let linha = 0;
        let coluna = 0;

        if (controle.direcao === config.key.ArrowDown) {
            //regra de negócio
            linha = last[0] + 1;
            coluna = last[1];
        }

        if (controle.direcao === config.key.ArrowLeft) {
            linha = last[0];
            coluna = last[1] - 1;
        }

        if (controle.direcao === config.key.ArrowRight) {
            linha = last[0];
            coluna = last[1] + 1;
        }

        if (controle.direcao === config.key.ArrowUp) {
            linha = last[0] - 1;
            coluna = last[1];
        }

        controle.proximoMovimento.push([linha, coluna]);
        
        this.reposicionarSnake(last[0], last[1]);
        this.atualizarPercurso(linha, coluna);
        this.capturarAlvo(linha, coluna);
        
        construirContainer();

    }

    capturarAlvo(linha, coluna) { 

        if (linha == alvo[0] && coluna == alvo[1]) {
            
            controle.crescimentoPendente = true;
            controle.alvoCapturado.push(linha, coluna);
            pontuar();
            novoAlvo();
            this.aumentarVelocidade();
            
        }
    }

    reposicionarSnake(linha, coluna) {

        if (controle.crescimentoPendente && controle.alvoCapturado[0] === linha && controle.alvoCapturado[1] == coluna) {
            snake.arrayPosition.push([linha, coluna])
            controle.alvoCapturado = [];
            controle.crescimentoPendente = false;
        }

        removerClassePorId(`l${snake.arrayPosition[0][0]}c${snake.arrayPosition[0][1]}`, atributosVisuais.classe.snake);
    }

    atualizarPercurso() {
        this.arrayPosition.push(controle.proximoMovimento.pop());
        this.arrayPosition.shift()
    }

    aumentarVelocidade() {
        if (controle.velocidadeMs > config.velocidadeMsMaxima)
            controle.velocidadeMs = controle.velocidadeMs - 10;
    }
}

const snake = new Snake();

function novoAlvo() {
    
    if (alvo.length > 0)
        removerClassePorId(`l${alvo[0]}c${alvo[1]}`, atributosVisuais.classe.alvo);

    linha = randomNumber();
    coluna = randomNumber();
    
    alvo = [linha, coluna];
    config.area[linha][coluna] = atributosVisuais.classe.alvo;

    function randomNumber(){
        return Math.floor(Math.random() * config.size);
    }
}

function pontuar() {
    pontos++;
    let pontuacaoElement = document.getElementsByTagName("p")[0];
    pontuacaoElement.innerHTML = `Pontuação: ${pontos}`;
}

construirArea();
novoAlvo();

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

    //adicionar alvo
    adicionarClassePorId(`l${alvo[0]}c${alvo[1]}`, atributosVisuais.classe.alvo);

    //adicionar snake
    snake.arrayPosition.forEach(function(s) {
        adicionarClassePorId(`l${s[0]}c${s[1]}`, atributosVisuais.classe.snake);
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

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
  
async function infinitLoop() {

    while(!controle.fimDeJogo) {
        
        await sleep(controle.velocidadeMs);
        
        if (!controle.pause)
            snake.andar(controle.direcao);
    }
}

infinitLoop();
