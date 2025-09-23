const formulario = document.getElementById('formulario')
let peso = document.getElementById('peso');
let altura = document.getElementById('altura');
let respostaIMC = document.getElementById('IMC');
let imagemIMC = document.getElementById('imagem');
formulario.addEventListener('submit', validarForm);

function validarAltura() {
    let alturaValor = parseFloat(altura.value);
    if (!isNaN(alturaValor) && alturaValor > 0) {
        altura.setAttribute('class', 'correto');
        return alturaValor; // retorna o valor numérico
    } else {
        altura.setAttribute('class', 'incorreto');
        return false;
    }
}

function validarPeso() {
    let pesoValor = parseFloat(peso.value);
    if (!isNaN(pesoValor) && pesoValor > 0) {
        peso.setAttribute('class', 'correto');
        return pesoValor;
    } else {
        peso.setAttribute('class', 'incorreto');
        return false;
    }
}

function validarForm(event) {
    event.preventDefault();

    let alturaValor = validarAltura();
    let pesoValor = validarPeso();

    if (alturaValor && pesoValor) {
        let IMC = pesoValor / Math.pow(alturaValor, 2);
        respostaIMC.setAttribute('value', IMC.toFixed(2));

        if (IMC < 18) {
            imagemIMC.setAttribute('src', 'src/normal.png');
        } else if (IMC < 28) {
            imagemIMC.setAttribute('src', 'src/sobrepeso.png');
        } else {
            imagemIMC.setAttribute('src', 'src/obesidade.png');
        }

    } else {
        alert("Por favor, insira valores válidos para peso e altura.");
    }
}
