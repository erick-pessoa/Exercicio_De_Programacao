let perguntas = [{
        titulo: "Gato",
        alternativas: ['Gat', 'Cat', 'Gate', 'Dog'],
        correto: 1
    },
    {
        titulo: "Fire",
        alternativas: ['Água', 'Ar', 'Fogo', 'Luz'],
        correto: 2
    },
    {
        titulo: "Bird",
        alternativas: ['Cachorro', 'Urubu', 'Pombo', 'Passaro'],
        correto: 3
    },
    {
        titulo: "Cachorro",
        alternativas: ['Dog', 'Cat', 'Bat', 'Fish'],
        correto: 0
    },
    {
        titulo: "Fish",
        alternativas: ['Urubu', 'Tatu', 'Cavalo', 'Peixe'],
        correto: 3
    }
];

let app = {
    start: function () {
        AtualPergunta = 0
        totalPontos = 0

        let alts = document.querySelectorAll('.alternativa')
        alts.forEach((element, index) => {
            element.addEventListener('click', () => {
                this.checaResposta(index); // O this se refere ao app, pode colocar app ou this que vai da no mesmo. Mas por boas práticas, coloque o this.
            })
        });

        this.mostraquestao(perguntas[AtualPergunta])
    },



    mostraquestao: function (q) {
        qtas = q
        // Mostra o titulo
        let titleDiv = document.getElementById('titulo');
        titleDiv.textContent = q.titulo; // Ele vai pegar o titulo da pergunta e substituir

        // Mostra as alternativas
        let alts = document.querySelectorAll('.alternativa');
        alts.forEach((element, index) => { // ForEach é igual ao um for ou map, dentro dele a gente passa um element e index dele, mas aqui no caso, estou passando uma função para cada elemento do ALTS
            element.textContent = q.alternativas[index] // O element aqui está pegando o primeiro elemento do array e colocando com o textContent as alternativas
        });
    },


    ProximaPerg: function () { // Vai fazer ir para próxima pergunta do array
        AtualPergunta++
        if (AtualPergunta == perguntas.length) { // O array de perguntas vai de 0 a 2, depois da pergunta do array 2. ele volta para 0
            AtualPergunta = 0
        }
    },


    checaResposta: function (user) {
        
        let resultDiv = document.getElementById('resulta')

        if (qtas.correto == user) {

            totalPontos++
            resultDiv.textContent = 'Resposta está CORRETA !!'
            
        } else {
            
            // Obtendo  a questão atual
            let pergunta = perguntas[AtualPergunta]
            //Obtendo  o indece da resposta correta da questão atual
            let indexx = pergunta.correto;
            // Obtendo o texto  da resposta  correta  da questão atual
            let cText = pergunta.alternativas[indexx];
            
            resultDiv.textContent = `INCORRETA !! Resposta certa: ${cText} !!`
        }
        
        this.ProximaPerg();
        this.atualizarPontos();
        this.mostraquestao(perguntas[AtualPergunta])

    },

    atualizarPontos: function () {
        let scoreDiv = document.getElementById('pontos')
        scoreDiv.textContent = `Sua pontuação é: ${totalPontos}`
    }
}


app.start();