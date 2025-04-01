var Alunos = ["André", "Matheus", "Phelipe", "Bernardo", "Eloisa", "Erika", "Marilia", "Nathan", "João P.", "Riciery", "Leticia", "Nicolas"];

function MatarOMatheus(Alunos) {

    for (let i = 0; i < Alunos.length; i++) { // Faz uma repetição para todos os items do array
        if (Alunos[i] == "Matheus") {
            Alunos.splice(i, 1) // Remove o item "Matheus"

        }

    }

}

MatarOMatheus(Alunos)
console.log(Alunos)
