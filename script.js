
const perguntas = [
    {
        pergunta: "Qual palavra-chave é usada para declarar uma variável em JavaScript?",
        respostas:[
            "var",
            "let",
            "const",
        ],
        correta: 2,
    },
    {
        pergunta: "Como você escreve um comentário de uma linha em JavaScript?",
        respostas:[
            "// Comentário",
            "/* Comentário */",
            "# Comentário",
        ],
        correta: 0,
    },
    {
        pergunta: "Qual método é usado para imprimir algo no console em JavaScript?",
        respostas:[
            "log()",
            "print()",
            "display()",
        ],
        correta: 0,
    },
    {
        pergunta: "Como você verifica se duas variáveis são estritamente iguais em valor e tipo?",
        respostas:[
            "==",
            "===",
            "!=",
        ],
        correta: 1,
    },
    {
        pergunta: "Qual função é usada para converter uma string em um número em JavaScript?",
        respostas:[
            "parseInt()",
            "stringToNumber()",
            "convertToNumber()",
        ],
        correta: 0,
    },
    {
        pergunta: "O que o operador 'typeof' faz em JavaScript?",
        respostas:[
            "Verifica se um valor é nulo",
            "Retorna o tipo de uma variável",
            "Concatena duas strings",
        ],
        correta: 1,
    },
    {
        pergunta: "Qual é a sintaxe correta para um loop 'for' em JavaScript?",
        respostas:[
            "for (i = 0; i < 5; i++)",
            "loop (i = 0; i < 5; i++)",
            "for (i < 5; i++)",
        ],
        correta: 0,
    },
    {
        pergunta: "O que o método 'Array.push()' faz em JavaScript?",
        respostas:[
            "Remove um elemento do final do array",
            "Adiciona um elemento ao início do array",
            "Adiciona um elemento ao final do array",
        ],
        correta: 2,
    },
    {
        pergunta: "Qual é o operador lógico 'AND' em JavaScript?",
        respostas:[
            "&&",
            "||",
            "!",
        ],
        correta: 0,
    },
    {
        pergunta: "O que o método 'Array.length' retorna em JavaScript?",
        respostas:[
            "O último elemento do array",
            "O número total de elementos no array",
            "O primeiro elemento do array",
        ],
        correta: 1,
    },
];

const quiz = document.querySelector('#quiz');
const template = document.querySelector('template');

const corretas = new Set();
const totalDePerguntas = perguntas.length;
const mostrarTotal = document.querySelector('#acertos span');
mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas;


for(const item of perguntas) {
    const quizItem =  template.content.cloneNode(true);
    quizItem.querySelector('h3').textContent= item.pergunta
   
for(let resposta of item.respostas) {
    const dt = quizItem.querySelector('dl dt').cloneNode(true);
    dt.querySelector('span').textContent = resposta;
    dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item));
    dt.querySelector('input').value = item.respostas.indexOf(resposta);
    dt.querySelector('input[type="radio"]').onchange = (event) => {
        const estaCorreta = event.target.value == item.correta;
      
      corretas.delete(item)
      if(estaCorreta) {
        corretas.add(item)
    }

    mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas;

  }
    quizItem.querySelector('dl').appendChild(dt);
}
    

quizItem.querySelector('dl dt').textContent = "";


    quiz.appendChild(quizItem);
//alert(item.pergunta);
}
