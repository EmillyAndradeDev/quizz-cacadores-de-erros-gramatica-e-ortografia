// Lista de perguntas e respostas
const perguntas = [
    {
        "pergunta": "Pergunta 01 - Qual das frases está correta?",
        "respostas": [
            {"opcao": "Eu haviam comprado o ingresso.", "correto": false},
            {"opcao": "Havia muitas pessoas na fila.", "correto": true},
            {"opcao": "Houveram muitas reclamações sobre o filme.", "correto": false},
            {"opcao": "Haviam vários motivos para comemorar.", "correto": false}
        ]
    },
    {
        "pergunta": "Pergunta 02 - Assinale a alternativa com a grafia correta:",
        "respostas": [
            {"opcao": "Exessão", "correto": false},
            {"opcao": "Excessão", "correto": false},
            {"opcao": "Exceção", "correto": true},
            {"opcao": "Exçessão", "correto": false}
        ]
    },
    {
        "pergunta": "Pergunta 03 - Complete a frase corretamente: Se eu _______ mais tempo, teria estudado melhor.",
        "respostas": [
            {"opcao": "tivesse", "correto": true},
            {"opcao": "teria", "correto": false},
            {"opcao": "houvera", "correto": false},
            {"opcao": "tivesse tido", "correto": false}
        ]
    },
    {
        "pergunta": "Pergunta 04 - Qual é a forma correta de escrever?",
        "respostas": [
            {"opcao": "Beneficiente", "correto": false},
            {"opcao": "Beneficente", "correto": true},
            {"opcao": "Beneficenti", "correto": false},
            {"opcao": "Benificente", "correto": false}
        ]
    },
    {
        "pergunta": "Pergunta 05 - Assinale a frase escrita corretamente:",
        "respostas": [
            {"opcao": "Fazem dez anos que não nos vemos.", "correto": false},
            {"opcao": "Faz dez anos que não nos vemos.", "correto": true},
            {"opcao": "Fazem dez anos que não nos vemos atrás.", "correto": false},
            {"opcao": "Faz dez anos que não nos víamos atrás.", "correto": false}
        ]
    },
    {
        "pergunta": "Pergunta 06 - Complete corretamente: Os documentos já _______ entregues ontem.",
        "respostas": [
            {"opcao": "tinham sido", "correto": true},
            {"opcao": "tinha sido", "correto": false},
            {"opcao": "tinhas sido", "correto": false},
            {"opcao": "tinho sido", "correto": false},
        ]
    },
    {
        "pergunta": "Pergunta 07 - Qual alternativa está grafada corretamente?",
        "respostas": [
            {"opcao": "Ancião", "correto": true},
            {"opcao": "Anciam", "correto": false},
            {"opcao": "Ansião", "correto": false},
            {"opcao": "Anciam", "correto": false}
        ]
    },
    {
        "pergunta": "Pergunta 08 - Em qual frase o uso do porque está correto?",
        "respostas": [
            {"opcao": "Não fui à festa, porque estava cansada.", "correto": true},
            {"opcao": "Não fui à festa por que estava cansada.", "correto": false},
            {"opcao": "Não fui à festa, por quê estava cansada.", "correto": false},
            {"opcao": "Não fui à festa porquê estava cansada.", "correto": false},
        ]
    },
    {
        "pergunta": "Pergunta 09 - Escolha a alternativa em que todas as palavras estão corretas:",
        "respostas": [
            {"opcao": "Enjoo, heróico, consciencia", "correto": false},
            {"opcao": "Enjoo, heroico, consciência", "correto": true},
            {"opcao": "Enjoô, heróico, consciencia", "correto": false},
            {"opcao": "Enjoo, heroíco, conciência", "correto": false},
        ]
    }
]

// Pegar os elementos do HTML
const perguntaElemento = document.querySelector(".pergunta");
const respostasElemento = document.querySelector(".respostas");
const progressoElemento = document.querySelector(".progresso");
const textoFinal = document.querySelector(".fim span");
const conteudo = document.querySelector(".conteudo");
const conteudoFinal = document.querySelector(".fim");

// Variáveis para controle do jogo
let indiceAtual = 0; //índice da pergunta atual
let acertos = 0; //contador de acertos

// Função para carregar uma nova pergunda
function carregarPergunta() {

    progressoElemento.innerHTML = `${indiceAtual + 1}/${perguntas.length}`; //atualiza o progresso
    
    const perguntaAtual = perguntas[indiceAtual]; // Pega a pergunta atual
    perguntaElemento.innerHTML = perguntaAtual.pergunta; // Exibe a pergunta

    respostasElemento.innerHTML = ""; // limpa as respostas anteriores

    // Percorre todas as respostas da pergunta atual
    for (let i = 0; i < perguntaAtual.respostas.length; i++) {
        // Pega a resposta atual com base no índice 'i'
        const resposta = perguntaAtual.respostas[i];
        // Cria um novo 'button'
        const botao = document.createElement("button");
        // Adiciona a classe CSS 'botao-resposta' ao botão para estilizar
        botao.classList.add("botao-resposta");
        // Define o texto do botão com a opção de resposta (resposta.opcao)
        botao.innerText = resposta.opcao;
        // Adiciona um evento de clique no botão
        botao.onclick = function() {
            // Se a resposta for correta (resposta.correto === true), incrementa o número de acertos
            if (resposta.correto) {
                acertos++;
            }

            // avança para a próxima pergunta
            indiceAtual++;

            // se ainda houver perguntas, carrega a próxima pergunta
            if (indiceAtual < perguntas.length) {
                carregarPergunta();
            } else {
                finalizarJogo();
            }
        };

        // Adiciona o botão de resposta à tela, dentro do elemento 'respostasElemento'
        respostasElemento.appendChild(botao);
    }
}

// Função para mostrar tela final
function finalizarJogo() {
    textoFinal.innerHTML = `Você acertou ${acertos} de ${perguntas.length}`;
    conteudo.style.display = "none"; // esconde as perguntas
    conteudoFinal.style.display = "flex"; // mostra a tela final
}

// Chamando a função de iniciar o jogo
carregarPergunta();