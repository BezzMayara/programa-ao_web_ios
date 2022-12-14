let alunos = [
  {
    nome: "Julio",
    idade: 16,
    notas: [6, 5, 10, 9],
    sala: "3A",
    escola: "PAULO EGYDIO",
    endereco: {
      rua: "Rua Eli",
      numero: 36,
      cidade: "São Paulo",
      estado: "SP",
    },
    escolaridade: "1 grau do Ensino Médio",
    responsável: "caio - Pai",
  },
  {
    nome: "Mario",
    idade: 15,
    notas: [7, 9, 3, 5],
    sala: "3b",
    escola: "PAULO EGYDIO",
    endereco: {
      rua: "Rua Arenapolis",
      numero: 15,
      cidade: "São Paulo",
      estado: "SP",
    },
    escolaridade: "1 grau do Ensino Médio",
    responsável: "josefa - Mãe",
  },
  {
    nome: "Ana",
    idade: 17,
    notas: [6, 7, 5, 9],
    sala: "3c",
    escola: "PAULO EGYDIO",
    endereco: {
      rua: "Rua serafim poli",
      numero: 12,
      cidade: "São Paulo",
      estado: "SP",
    },
    escolaridade: "1 grau do Ensino Médio",
    responsável: "Fatima - Mãe",
  },
];

let soma = 0;
let media = 0;
let aprov = 0;

for (let x = 0; x < alunos.length; x++) {
  soma = 0;
  for (let i = 0; i < alunos[x].notas.length; i++) soma += alunos[x].notas[i];

  media = soma / alunos[x].notas.length;
  console.log(`media ${media}`);

  aprov = media >= 7 ? "aprovado" : "reprovado";
  console.log(` Aluno ${aprov}`);
}
