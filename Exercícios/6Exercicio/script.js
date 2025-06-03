/*
let v = Math.random();

document.write('<h1> ' + (v) + '<\h1>');

let usuario_num = parseInt(prompt('Digite a quantidade de números'));
document.write("<h1> Números da mega cena</h1>")
for(let i = 0; i < usuario_num; i++) { // Uso do Random e Round
    let num_random = Math.round(Math.random()*50);
    document.write(num_random);
    document.write(""); 
}
// Uso do Length
let texto = prompt("Digite qualquer coisa");
document.write("Esse texto possui " + texto.length + " caracteres");

*/
/* 
let email = prompt("Digite um email"); // Entrada de dados

if (email.indexOf("@") != -1 && email.indexOf('@') == email.lastIndexOf('@')) { // Processamento
  document.write('<h2 class="val">' + 'Email Válido' + '</h2>');  
  document.write('<h2> Olá, ' + email.substring(0, email.indexOf('@')) + '</h2>');
  document.write('<h2> Domínio: ' + email.substring(email.indexOf('@') + 1, email.length) + "</h2>")
} else {document.write('<h2 class="inval">' + 'Email Inválido' + '</h2>')} // Saída de dados */

const data = new Date();
const aniver =  new Date('2008-07-18 00:00:00')
console.log('Data : ' + data.getDate);
console.log('Horas: ' + data.getHours);
console.log('Minutos: ' + data.getMinutes);
console.log('Segundos: ' + data.getSeconds);

let dias = ["domingo", "segunda", "terça", "quarta", "quinta", "sexta", "sábado"];
document.write('<h2> Hoje é dia ' + data.toLocaleDateString(-3) + "</h2>");
let dia = data.getDay();
document.write('<h2> Hoje é ' + dias[dia]);
