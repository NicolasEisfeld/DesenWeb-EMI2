var contador = 0;
let data = new Date();
let timeoutId;
const clicks = document.getElementById('clicks');
const form = document.getElementById('form');

function atualizarHora() {
    let data = new Date();
    let dataTela = document.getElementById('data');
    dataTela.innerText= data.toLocaleTimeString();
}


function calcularClick(){
    contador++;
}


setInterval(() => {
    if(contador != 0) {
        clicks.innerText = `Cliques nos últimos 2 segundos: ${contador}`;
    }
    contador = 0;
}, 2000);

var btn2 = document.getElementById('btn2');
btn2.addEventListener('click', calcularClick);


function mudarBG() {
    var rndCol = 'rgb(' + Math.random() * 255 + ',' + Math.random() * 255 + ',' +
    Math.random() * 255 + ')';
    document.body.style.backgroundColor = rndCol;
}

function validar() {
    let nome = document.getElementById('nome');
    if(nome.value.length == 0) {
        alert('Nome Inválido');
    }
}


mudarBG()
atualizarHora()

function pararBG() {
    clearInterval(atual1);
}

let atual1 = setInterval(mudarBG, 1000);
let atual2 = setInterval(atualizarHora, 1000);



var btn1 = document.getElementById('btn1');
btn1.addEventListener('click', atualizarHora); // Adiciona um "ouvinte" para o elemento.

var btn2 = document.getElementById('btn2');
btn2.addEventListener('click', calcularClick);

var btn3 = document.getElementById('btn3'); 
btn3.addEventListener('click', mudarBG);

var btn4 = document.getElementById('btn4'); 
btn4.addEventListener('click', pararBG);

form.addEventListener('submit', validar)


