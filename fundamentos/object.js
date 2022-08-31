const prod1 = {}; //está vazio, porém podemos definir atributos do objeto dinamicamente.
prod1.nome = 'Celular Ultra Mega';
prod1.preco = 4998.90;
prod1['Desconto Legal'] = 0.40; //evitar atributos com espaço
console.log(prod1);

const prod2 = {
    nome: 'Camila Polo',
    preco: 79.90
};

console.log(prod2);