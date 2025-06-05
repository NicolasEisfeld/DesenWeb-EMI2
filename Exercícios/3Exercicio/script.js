let data_nascimento = prompt("Digite uma data de nascimento (No formato DD/MM/YYYY)");

data_nascimento = data_nascimento.replace(/\//g, '-');


const dia_aniver = data_nascimento.substring(0, data_nascimento.indexOf('-'));

const mes_aniver = data_nascimento.substring(
    data_nascimento.indexOf('-') + 1, 
    data_nascimento.lastIndexOf('-')
);

const ano_aniver = data_nascimento.substring(data_nascimento.lastIndexOf('-') + 1);

const data_nascimento_fort = (ano_aniver + '-' + (mes_aniver-1) + '-' + dia_aniver);


const data = new Date();
let ano = data.getFullYear;
const aniver = new Date(data_nascimento_fort + ' 00:00:00')

let ano_atual = data.getFullYear();
let idade = parseInt(ano_atual) - parseInt(ano_aniver);
document.write('Idade do Usuário: ' + idade);

let passou_aniver = (mes_aniver < data.getMonth() || (data.getMonth() === mes_aniver && data.getDate() > dia_aniver));

if(!passou_aniver) {
    idade -= 1;
}

let aniver_proximo = new Date(ano_atual, (mes_aniver - 1), dia);

let diferenca_aniver = aniver_proximo - data;
let diasfaltando = Math.ceil(diferenca_aniver / (1000 * 60  * 60 *  24));

document.write("Falta " + diasfaltando + " dias para o seu próximo aniversário");

