$(document).ready(function () {
    // Pelo jQuery
    $('p, h1').attr('class', 'dif');


    /* Pelo Javascript
    let par = document.getElementsByTagName('p');
    
    for (let i = 0; i < par.length; i++) {
        par[i].setAttribute('class', 'dif');
    } */

    $('#Matéria').text("Desenvolvimento Web II 😭")

    let nome = prompt("Digite seu nome");
    $('#Nome').text(nome)

    $('#btn1').click(testeclick);
});
function testeclick() {
    let cidade = $('#Cidade').val();
    alert($('#Nome').text() + ' de ' + cidade);
}

