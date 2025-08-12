// Lista de perguntas e respostas
const perguntas = [
    {
        "pergunta": "Pergunta 01 - Qual das frases está correta?",
        "respostas": [
            { "opcao": "Eu haviam comprado o ingresso.", "correto": false, "explicacao": "O verbo 'haver' no sentido de existir é impessoal, logo deve ser usado no singular: 'Havia muitas pessoas'." },
            { "opcao": "Havia muitas pessoas na fila.", "correto": true, "explicacao": "Correto, pois 'haver' no sentido de existir é impessoal e fica no singular." },
            { "opcao": "Houveram muitas reclamações sobre o filme.", "correto": false, "explicacao": "'Houveram' está incorreto, o verbo 'haver' no sentido de existir fica no singular: 'Houve muitas reclamações'." },
            { "opcao": "Haviam vários motivos para comemorar.", "correto": false, "explicacao": "'Haviam' está incorreto, pois 'haver' no sentido de existir é impessoal e fica no singular." }
        ]
    },

    {
        "pergunta": "Pergunta 02 - Assinale a alternativa com a grafia correta:",
        "respostas": [
            { "opcao": "Exessão", "correto": false, "explicacao": "Incorreto. A grafia correta é com 'c' depois do 'e', formando 'exceção'." },
            { "opcao": "Excessão", "correto": false, "explicacao": "Incorreto. O correto é 'exceção', sem o 's' depois do 'c'." },
            { "opcao": "Exceção", "correto": true, "explicacao": "Correto! A palavra 'exceção' se escreve com 'c' depois do 'e' e com 'ç' antes do 'ã'." },
            { "opcao": "Exçessão", "correto": false, "explicacao": "Incorreto. A letra 'ç' não deve ser seguida de 'ss' nessa palavra." }
        ]
    },

    {
        "pergunta": "Pergunta 03 - Complete a frase corretamente: Se eu _______ mais tempo, teria estudado melhor.",
        "respostas": [
            { "opcao": "tivesse", "correto": true, "explicacao": "Correto! 'Se eu tivesse mais tempo' usa o pretérito imperfeito do subjuntivo, que é adequado para condições hipotéticas no passado." },
            { "opcao": "teria", "correto": false, "explicacao": "Incorreto. 'Se eu teria' não é gramaticalmente correto, pois a oração condicional exige o subjuntivo no 'se'." },
            { "opcao": "houvera", "correto": false, "explicacao": "Incorreto. Embora 'houvera' seja pretérito mais-que-perfeito do subjuntivo, não é usado com o verbo 'ter' nessa construção." },
            { "opcao": "tivesse tido", "correto": false, "explicacao": "Incorreto. 'Se eu tivesse tido mais tempo' fica redundante e pouco natural nessa frase." }
        ]
    },

    {
        "pergunta": "Pergunta 04 - Qual é a forma correta de escrever?",
        "respostas": [
            { "opcao": "Beneficiente", "correto": false, "explicacao": "Incorreto. A palavra não tem 'i' após o 'f'." },
            { "opcao": "Beneficente", "correto": true, "explicacao": "Correto! 'Beneficente' é a forma correta, com 'c' após o 'f' e sem 'i' antes do 'e'." },
            { "opcao": "Beneficenti", "correto": false, "explicacao": "Incorreto. A terminação 'ti' não existe nessa palavra." },
            { "opcao": "Benificente", "correto": false, "explicacao": "Incorreto. A palavra começa com 'bene', não 'beni'." }
        ]
    },

    {
        "pergunta": "Pergunta 05 - Assinale a frase escrita corretamente:",
        "respostas": [
            { "opcao": "Fazem dez anos que não nos vemos.", "correto": false, "explicacao": "Incorreto. O verbo 'fazer', no sentido de tempo decorrido, é impessoal e fica no singular: 'faz dez anos'." },
            { "opcao": "Faz dez anos que não nos vemos.", "correto": true, "explicacao": "Correto! 'Faz dez anos' está correto porque o verbo 'fazer' é impessoal e permanece no singular para indicar tempo decorrido." },
            { "opcao": "Fazem dez anos que não nos vemos atrás.", "correto": false, "explicacao": "Incorreto e sem sentido. Além do erro no verbo, a expressão 'atrás' nesse contexto é desnecessária e incorreta." },
            { "opcao": "Faz dez anos que não nos víamos atrás.", "correto": false, "explicacao": "Incorreto. O verbo 'víamos' está no pretérito imperfeito, que não combina com o sentido da frase atual." }
        ]
    },

    {
        "pergunta": "Pergunta 06 - Complete corretamente: Os documentos já _______ entregues ontem.",
        "respostas": [
            { "opcao": "tinham sido", "correto": true, "explicacao": "Correto! O sujeito 'os documentos' está no plural, portanto o verbo deve concordar no plural: 'tinham sido entregues'." },
            { "opcao": "tinha sido", "correto": false, "explicacao": "Incorreto. 'Tinha sido' está no singular e não concorda com o sujeito plural 'os documentos'." },
            { "opcao": "tinhas sido", "correto": false, "explicacao": "Incorreto. 'Tinhas' é a forma da segunda pessoa do singular, inadequada para o sujeito 'os documentos'." },
            { "opcao": "tinho sido", "correto": false, "explicacao": "Incorreto. 'Tinho' não existe na conjugação do verbo ter." },
        ]
    },

    {
        "pergunta": "Pergunta 07 - Qual alternativa está grafada corretamente?",
        "respostas": [
            { "opcao": "Ancião", "correto": true, "explicacao": "Correto! 'Ancião' é a forma correta para indicar pessoa idosa ou sábia, com 'ão' no final." },
            { "opcao": "Anciam", "correto": false, "explicacao": "Incorreto. 'Anciam' não é uma palavra correta em português." },
            { "opcao": "Ansião", "correto": false, "explicacao": "Incorreto. A palavra correta é 'Ancião', sem 's' após o 'n'." },
            { "opcao": "Anciam", "correto": false, "explicacao": "Incorreto. Repetição da palavra incorreta." }
        ]
    },

    {
        "pergunta": "Pergunta 08 - Em qual frase o uso do porque está correto?",
        "respostas": [
            { "opcao": "Não fui à festa, porque estava cansada.", "correto": true, "explicacao": "Correto! 'Porque' é uma conjunção causal que explica a razão de não ter ido à festa." },
            { "opcao": "Não fui à festa por que estava cansada.", "correto": false, "explicacao": "Incorreto. 'Por que' separado é usado em perguntas ou para substituir 'pelo qual', o que não se aplica aqui." },
            { "opcao": "Não fui à festa, por quê estava cansada.", "correto": false, "explicacao": "Incorreto. 'Por quê' com acento é usado no final de frases ou perguntas, não no meio de uma frase explicativa." },
            { "opcao": "Não fui à festa porquê estava cansada.", "correto": false, "explicacao": "Incorreto. 'Porquê' com acento é um substantivo e deve ser usado com artigo, como em 'o porquê da coisa'." },
        ]
    },

    {
        "pergunta": "Pergunta 09 - Escolha a alternativa em que todas as palavras estão corretas:",
        "respostas": [
            { "opcao": "Enjoo, heróico, consciencia", "correto": false, "explicacao": "Incorreto. 'Heróico' e 'consciencia' estão grafadas incorretamente — o correto é 'heróico' sem acento e 'consciência' com acento." },
            { "opcao": "Enjoo, heroico, consciência", "correto": true, "explicacao": "Correto! Todas as palavras estão grafadas corretamente." },
            { "opcao": "Enjoô, heróico, consciencia", "correto": false, "explicacao": "Incorreto. 'Enjoô' e 'consciencia' estão incorretas, além de 'heróico' que deveria ser 'heroico'." },
            { "opcao": "Enjoo, heroíco, conciência", "correto": false, "explicacao": "Incorreto. 'Heroíco' e 'conciência' estão grafadas incorretamente." },
        ]
    },

    {
        "pergunta": "Pergunta 10 - Qual é a forma correta de usar a crase nesta frase? \"Ela se referiu ___ professora com muito respeito.",
        "respostas": [
            { "opcao": "à", "correto": true, "explicacao": "Correto! Usa-se crase ('à') antes de palavras femininas quando há a preposição 'a' + o artigo definido feminino 'a'." },
            { "opcao": "a", "correto": false, "explicacao": "Incorreto. Falta a crase, pois a preposição 'a' se junta ao artigo feminino 'a'." },
            {
                "opcao": "há", "correto": false, "explicacao": "Incorreto. 'Há' com 'h' é verbo haver no sentido de existir ou tempo passado, não tem relação com crase."
            },
            {
                "opcao": "àa", "correto": false, "explicacao": "Incorreto. 'Àa' é uma forma incorreta, não existe em português."
            }
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
    limparEstadoAnterior();

    progressoElemento.innerText = `${indiceAtual + 1}/${perguntas.length}`;
    const perguntaAtual = perguntas[indiceAtual];
    perguntaElemento.innerText = perguntaAtual.pergunta;

    perguntaAtual.respostas.forEach(resposta => {
        const botao = document.createElement("button");
        botao.classList.add("botao-resposta");
        botao.innerText = resposta.opcao;
        botao.setAttribute("aria-pressed", "false");
        botao.setAttribute("role", "button");

        botao.onclick = () => selecionarResposta(botao, resposta);
        respostasElemento.appendChild(botao);
    });
}

// Função para limpar tela antes de carregar próxima pergunta
function limparEstadoAnterior() {
    respostasElemento.innerHTML = "";
}

// Função que lida com a escolha da resposta
function selecionarResposta(botaoSelecionado, respostaSelecionada) {
    // Desabilitar todos os botões para evitar múltiplos cliques
    const botoes = respostasElemento.querySelectorAll("button");
    botoes.forEach(botao => {
        botao.disabled = true;
        botao.setAttribute("aria-disabled", "true");
    });

    // Marcar visualmente as respostas corretas e incorretas
    botoes.forEach(botao => {
        const texto = botao.innerText;
        // Achar o objeto resposta correspondente
        const respostaObj = perguntas[indiceAtual].respostas.find(r => r.opcao === texto);

        if (respostaObj.correto) {
            botao.classList.add("correto"); // estilizar verde
        } else {
            botao.classList.remove("correto");
        }
    });

    // Se resposta correta, marca verde no botão selecionado e incrementa acertos
    if (respostaSelecionada.correto) {
        botaoSelecionado.classList.add("correto");
        acertos++;
        mostrarExplicacao("Correto! " + respostaSelecionada.explicacao);
    } else {
        botaoSelecionado.classList.add("errado"); // estilizar vermelho
        // Mostrar explicação da resposta correta
        const respostaCorreta = perguntas[indiceAtual].respostas.find(r => r.correto);
        mostrarExplicacao("Errado! " + respostaSelecionada.explicacao);
    }

    // Depois de 3 segundos, vai para a próxima pergunta ou finaliza
    setTimeout(() => {
        indiceAtual++;
        if (indiceAtual < perguntas.length) {
            carregarPergunta();
        } else {
            finalizarJogo();
        }
    }, 5000);
}

// Função para mostrar texto explicativo logo abaixo das respostas
function mostrarExplicacao(texto) {
    // Se já existir, remove antes
    let explicacaoElemento = document.querySelector(".explicacao");
    if (explicacaoElemento) {
        explicacaoElemento.remove();
    }
    explicacaoElemento = document.createElement("div");
    explicacaoElemento.classList.add("explicacao");
    explicacaoElemento.setAttribute("role", "alert");
    explicacaoElemento.innerText = texto;
    respostasElemento.appendChild(explicacaoElemento);
}

// Função para finalizar o quiz
function finalizarJogo() {
    textoFinal.innerText = `Você acertou ${acertos} de ${perguntas.length} perguntas!`;
    conteudo.style.display = "none";
    conteudoFinal.style.display = "flex";

    // Criar botão para reiniciar
    criarBotaoReiniciar();
}

// Função para criar botão reiniciar e adicionar na tela final
function criarBotaoReiniciar() {
    // Verificar se já existe para não duplicar
    if (document.querySelector(".botao-reiniciar")) return;

    const botaoReiniciar = document.createElement("button");
    botaoReiniciar.innerText = "Reiniciar Quiz";
    botaoReiniciar.classList.add("botao-reiniciar");
    botaoReiniciar.setAttribute("aria-label", "Reiniciar o quiz");
    botaoReiniciar.onclick = reiniciarQuiz;

    conteudoFinal.appendChild(botaoReiniciar);
}

// Função para reiniciar o quiz
function reiniciarQuiz() {
    indiceAtual = 0;
    acertos = 0;
    conteudo.style.display = "block";
    conteudoFinal.style.display = "none";

    // Remover explicação, se existir
    const explicacaoElemento = document.querySelector(".explicacao");
    if (explicacaoElemento) {
        explicacaoElemento.remove();
    }

    // Remover botão reiniciar para evitar duplicatas
    const botaoReiniciar = document.querySelector(".botao-reiniciar");
    if (botaoReiniciar) {
        botaoReiniciar.remove();
    }

    carregarPergunta();
}

// Inicia o quiz
carregarPergunta();