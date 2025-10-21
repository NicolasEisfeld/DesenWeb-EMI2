

function obterHorario() {
    const data = new Date();
    const horas = data.getHours();
    const minutos = data.getMinutes().toString().padStart(2, '0');

    let saudacao = "";
    let imagem = "";

    if (horas < 12) {
        saudacao = "Bom dia!";
        imagem = "amanhecer.jpg";
    } else if (horas == 12) {
        saudacao = "Bom almoço!"
        imagem = "almoço.jpg"
    } else if (horas < 18) {
        saudacao = "Boa tarde!";
        imagem = "tarde.jpg"
    } else {
        saudacao = "Boa noite!";
        imagem = "anoitecer.jpg"
    }

    const mensagem = saudacao + " Agora são " + horas + ":" + minutos;

    document.getElementById("horario").textContent = mensagem;
    const img = document.querySelector(".imagens img");
    img.src = imagem;

}


window.onload = obterHorario;