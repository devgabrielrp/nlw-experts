const perguntas = [
    {
      pergunta: "Qual é o curso de faculdade que Gabriel está cursando?",
      resposta: [
        "Ciências da Computação",
        "Engenharia de Software",
        "Análise e Desenvolvimento de Sistemas",
      ],
      correta: 2 // Resposta correta: Análise e Desenvolvimento de Sistemas (c)
    },
    {
      pergunta: "Qual é o curso que a namorada de Gabriel está cursando?",
      resposta: [
        "Medicina",
        "Administração",
        "Odontologia",
      ],
      correta: 2 // Resposta correta: Odontologia (c)
    },
    {
      pergunta: "Qual é a religião de Gabriel?",
      resposta: [
        "Cristianismo",
        "Islamismo",
        "Budismo",
      ],
      correta: 0 // Resposta correta: Cristianismo (a)
    },
    {
      pergunta: "Qual é a data de aniversário de Gabriel?",
      resposta: [
        "16 de março de 2006",
        "16 de março de 2005",
        "16 de abril de 2006",
      ],
      correta: 0 // Resposta correta: 16 de março de 2006 (a)
    },
    {
      pergunta: "Qual é o nome do pai de Gabriel?",
      resposta: [
        "José Halsiman",
        "Raul Halsiman",
        "João Halsiman",
      ],
      correta: 0 // Resposta correta: José Halsiman (a)
    },
    {
      pergunta: "Qual é o nome da mãe de Gabriel?",
      resposta: [
        "Valéria",
        "Maria",
        "Ana",
      ],
      correta: 0 // Resposta correta: Valéria (a)
    },
    {
      pergunta: "Qual atividade física Gabriel prefere?",
      resposta: [
        "Musculação",
        "Jiu Jitsu",
        "Crossfit",
      ],
      correta: 0 // Resposta correta: Musculação (a)
    },
    {
      pergunta: "Qual é o seu prato preferido?",
      resposta: [
        "Pizza",
        "Churrasco",
        "Massa",
      ],
      correta: 1 // Resposta correta: Churrasco (b)
    },
    {
      pergunta: "Qual é o seu animal de estimação e quantos ele tem?",
      resposta: [
        "Cachorro (2)",
        "Gato (1)",
        "Peixe (5)",
      ],
      correta: 0 // Resposta correta: Cachorro (2) (a)
    },
    {
      pergunta: "Qual é o celular de Gabriel?",
      resposta: [
        "iPhone 11 64GB",
        "iPhone 11 128GB",
        "iPhone 11 256GB",
      ],
      correta: 1 // Resposta correta: iPhone 11 128GB (b)
    },
  ];


const quiz = document.querySelector('#quiz');
const template = document.querySelector('template');

const corretas = new Set();
let totalDeAcertos = 0;
const mostrarTotal = document.querySelector('#acertos span');
mostrarTotal.textContent = totalDeAcertos + ' de ' + perguntas.length;

for (const item of perguntas) {
const quizItem = template.content.cloneNode(true);
quizItem.querySelector('h3').textContent = item.pergunta;

for (let resposta of item.resposta) {
const dt = document.createElement('dt');
const input = document.createElement('input');
input.type = 'radio';
input.name = 'pergunta-' + perguntas.indexOf(item);
input.value = item.resposta.indexOf(resposta);
input.addEventListener('change', (event) => {
  const estaCorreta = parseInt(event.target.value) === item.correta;

  if (estaCorreta && !corretas.has(item)) {
    corretas.add(item);
    totalDeAcertos++;
  } else if (!estaCorreta && corretas.has(item)) {
    corretas.delete(item);
    totalDeAcertos--;
  }

  mostrarTotal.textContent = totalDeAcertos + ' de ' + perguntas.length;
});

const span = document.createElement('span');
span.textContent = resposta;
dt.appendChild(input);
dt.appendChild(span);

quizItem.querySelector('dl').appendChild(dt);
}

quizItem.querySelector('dl dt').remove()

quiz.appendChild(quizItem);
}