$(document).ready(function () {
    $(":button#btnCalcular").click(calcular)
})

function validar(num) {
    if (num != '') {
        return true;
    } else {
        return false;
    }

}

function calcular() {
    let num1 = $('#numero1').val();
    let num2 = $('#numero2').val();

    let num1Valido = validar(num1);
    let num2Valido = validar(num2);

    if (num1Valido) {
        $('#numero1').attr('class', 'correto');
    } else {
        $('#numero1').attr('class', 'incorreto');
    }

    if (num2Valido) {
        $('#numero2').attr('class', 'correto');
    } else {
        $('#numero2').attr('class', 'incorreto');
    }

    if (!num1Valido || !num2Valido) {
        $("#resultado").attr('value', '');
        $('#imagem-operacao').attr('src', '');
        return;
    }

    num1 = parseFloat(num1);
    num2 = parseFloat(num2);

    if ($("#operacao").val() == "mais") {
        var soma = num1 + num2;
        $("#resultado").attr('value', soma);
        $('#imagem-operacao').attr('src', 'src/mais.png')
    } else if ($("#operacao").val() == "menos") {
        var diferenca = num1 - num2;
        $("#resultado").attr('value', diferenca);
        $('#imagem-operacao').attr('src', 'src/menos.png')
    } else if ($("#operacao").val() == "vezes") {
        var mult = num1 * num2;
        $("#resultado").attr('value', mult);
        $('#imagem-operacao').attr('src', 'src/vezes.png')
    } else {
        var divisao = num1 / num2;
        $("#resultado").attr('value', divisao);
        $('#imagem-operacao').attr('src', 'src/divide.png')

    }
}