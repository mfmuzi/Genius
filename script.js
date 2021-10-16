let order = [];
let clickedOrder = [];
let score = 0;

// 0 - verde
// 1 - vermelho
// 2 - amarelo
// 3 - azul


const blue = document.querySelector('.blue');
const red = document.querySelector('.red');
const green = document.querySelector('.green');
const yellow = document.querySelector('.yellow');


//sorteio das cores
let shuffleOrder = () => {
    let colorOrder = Math.floor(Math.random() *4);
    order[order.length] = colorOrder;
    clickedOrder = [];

    for(let i in order){
        let elementColor = createColorElement(order[i]);
        lightColor(elementColor, Number(i)+1)
    }
}

//acender a cor selecionada
let lightColor = (element, number) => {
    number = number * 1000;
    setTimeout(() => {
        element.classList.add('selected');
    }, number - 500);

    setTimeout(() => {
        element.classList.remove('selected');
    }, number);
}

//compara se a ordem das cores clicadas está correta
let checkOrder = () => {
    for(let i in clickedOrder){
        if(clickedOrder[i] != order[i]){
            gameOver();
            break;
        }
    }
    if(clickedOrder.length == order.length){
        nextLevel();
    }

    
}

//função para verificar o click do usuário
let click = (color) => {
    clickedOrder[clickedOrder.length] = color;
    createColorElement(color).classList.add('selected');

    setTimeout(() => {
        createColorElement(color).classList.remove('selected');
        checkOrder(); //verifica se foi clicada a cor correta
    },250);    
}

//Função que retorna a cor
let createColorElement = (color) => {
    if(color == 0){
        return green;
    }else if(color == 1){
        return red;
    }else if(color == 2){
        return yellow;
    }else if(color == 3){
        return blue;
    }
}

//Função para próximo nível
let nextLevel = () => {
    score++;
    shuffleOrder();

const nivel = document.querySelector('.nivel');
nivel.innerText = score;
    
}


//Função para Game Over
let gameOver = () => {    
    swal("GAME OVER!");    
    score=0;
    order = [];
    clickedOrder = []
}

//Função para iniciar o jogo
let playGame = () => {
    score = 0;
    order = [];
    clickedOrder = []
    nextLevel();
}


//Adicionando os clickes às cores.
green.onclick = () => click(0);
red.onclick = () => click(1);
yellow.onclick = () => click(2);
blue.onclick = () => click(3);

function redirecionar(){
    window.open("https://www.linkedin.com/in/mfmuzi");
    //window.location.href = "https://www.linkedin.com/in/mfmuzi";
}

