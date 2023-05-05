const alunos = [
    {nome: 'João', nota: 7.9},
    {nome: 'Maria', nota: 9.2}
];

const getNota = aluno => aluno.nota;
const soma = (total, atual) => total + atual;
const total = alunos.map(getNota).reduce(soma);
console.log(total/alunos.length);