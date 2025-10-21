// Disciplina Web II
// Nicolas Eisfeld Ferreira

// Exercício 1
(function exercicio1() {
  let dataNascimento = prompt(
    "Digite uma data de nascimento (No formato DD/MM/AAAA)"
  );
  if (!dataNascimento) return;

  dataNascimento = dataNascimento.replace(/\//g, "-"); // Separei a data através do substring, trocando as barras "\/" por "-"

  const diaAniversario = dataNascimento.substring(
    0,
    dataNascimento.indexOf("-")
  );
  const mesAniversario = dataNascimento.substring(
    dataNascimento.indexOf("-") + 1,
    dataNascimento.lastIndexOf("-")
  );
  const anoAniversario = dataNascimento.substring(
    dataNascimento.lastIndexOf("-") + 1
  );

  const mesJS = parseInt(mesAniversario, 10) - 1;
  const hoje = new Date();
  let anoAtual = hoje.getFullYear();

  let idade = anoAtual - parseInt(anoAniversario, 10);
  if ( // Condicional para saber a idade atual
    parseInt(mesAniversario, 10) > hoje.getMonth() + 1 ||
    (parseInt(mesAniversario, 10) === hoje.getMonth() + 1 &&
      parseInt(diaAniversario, 10) > hoje.getDate())
  ) {
    idade -= 1;
  }

  document.getElementById("idade").textContent = `Idade do Usuário: ${idade}`;

  let proximoAniversario = new Date(
    anoAtual,
    mesJS,
    parseInt(diaAniversario, 10)
  );
  if (proximoAniversario < hoje) {
    proximoAniversario.setFullYear(anoAtual + 1);
  }
  const diferencaDias = Math.ceil(
    (proximoAniversario - hoje) / (1000 * 60 * 60 * 24)
  );
  document.getElementById(
    "dias-faltando"
  ).textContent = `Faltam ${diferencaDias} dias para o seu próximo aniversário.`;
})();

// Exercício 2
(function exercicio2() {
  const formulario = document.getElementById("formulario-datas");
  const resultado = document.getElementById("resultado");

  formulario.addEventListener("submit", function (evento) { // Utilizando o EventListener para capturar o evento do submit do botão
    evento.preventDefault();

    const dataInicialValor = formulario["data-inicial"].value;
    const quantidadeSemanas = parseInt(
      formulario["quantidade-semanas"].value,
      10
    );

    if (!dataInicialValor) {
      resultado.textContent = "Por favor, insira uma data inicial válida.";
      return;
    }
    if (!quantidadeSemanas || quantidadeSemanas < 1) {
      resultado.textContent =
        "Por favor, insira uma quantidade de semanas válida (mínimo 1).";
      return;
    }

    const dataInicial = new Date(dataInicialValor);
    if (isNaN(dataInicial.getTime())) { // Verifica se possui uma data válida
      resultado.textContent = "Data inicial inválida.";
      return;
    }

    const datas = [];
    for (let i = 0; i < quantidadeSemanas; i++) { // Loop com todas as datas partindo da data inicial selecionada
      const novaData = new Date(
        dataInicial.getFullYear(),
        dataInicial.getMonth(),
        dataInicial.getDate() + i * 7,
        12
      );
      datas.push(novaData);
    }

    const tabela = document.createElement("table");
    tabela.setAttribute("aria-label", "Tabela de datas semanais");
    tabela.classList.add("tabela-semanas");
    

    const cabecalho = document.createElement("thead");
    const linhaCabecalho = document.createElement("tr");
    const thSemana = document.createElement("th");
    thSemana.textContent = "Semana";
    const thData = document.createElement("th");
    thData.textContent = "Data";
    linhaCabecalho.append(thSemana, thData);
    cabecalho.appendChild(linhaCabecalho);
    tabela.appendChild(cabecalho);

    const corpoTabela = document.createElement("tbody");
    datas.forEach((data, indice) => { // Formata as datas e adiciona na tabela
      const linha = document.createElement("tr");
      const tdSemana = document.createElement("td");
      tdSemana.textContent = (indice + 1).toString();
      const tdData = document.createElement("td");
      tdData.textContent = data.toLocaleDateString("pt-BR", {
        weekday: "long",
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
      });
      tdData.style.textTransform = "capitalize";

      linha.append(tdSemana, tdData);
      corpoTabela.appendChild(linha);
    });
    tabela.appendChild(corpoTabela);
    

    resultado.innerHTML = "";
    resultado.appendChild(tabela);
  });
})();

// Exercício 3
(function exercicio3() {
  const btn = document.getElementById("geraApostaBtn");
  const apostaResultado = document.getElementById("apostaResultado");

  function gerarApostaMegaSena() {
    const numeros = [];
    while (numeros.length < 6) {
      const num = Math.floor(Math.random() * 60) + 1;
      if (!numeros.includes(num)) {
        numeros.push(num);
      }
    }
    return numeros.sort((a, b) => a - b);
  }

  function criarTabelaAposta(numeros) {
    const tabela = document.createElement("table");
    tabela.setAttribute("aria-label", "Tabela de aposta Mega Sena");
    tabela.style.marginTop = "1rem";

    const thead = document.createElement("thead"); // Cria os elementos para estilizar
    const trHead = document.createElement("tr");
    const thNum = document.createElement("th");
    thNum.textContent = "Números da Mega Sena";
    trHead.appendChild(thNum);
    thead.appendChild(trHead);
    tabela.appendChild(thead);

    const tbody = document.createElement("tbody");
    const trBody = document.createElement("tr");

    numeros.forEach((num) => {
      const td = document.createElement("td");
      td.textContent = num.toString().padStart(2, "0");
      trBody.appendChild(td);
    });

    tbody.appendChild(trBody);
    tabela.appendChild(tbody);

    return tabela;
  }

  btn.addEventListener("click", () => {
    apostaResultado.innerHTML = "";
    const aposta = gerarApostaMegaSena();
    const tabela = criarTabelaAposta(aposta);
    apostaResultado.appendChild(tabela);
  });
})();
