let isAtivo = false;
console.log(isAtivo);

isAtivo = true;
console.log(isAtivo);

isAtivo = 1;
console.log(!!isAtivo);

console.log('verdadeiros:');
console.log(!!3); //true
console.log(!!-1); //true
console.log(!!' '); //true
console.log(!![]); //true
console.log(!!{}); //obg literal true
console.log(!!Infinity); //true
console.log(!!(isAtivo = true)); //true, essa NAO É a resposta da atribuicao

console.log('falsos:')
console.log(!!"");
console.log(!!0);
console.log(!!null);
console.log(!!NaN);
console.log(!!undefined);
console.log(!!(isAtivo = false));

console.log('pra finalizar:')
console.log(!!('' || null || 0 || ' ')); //true
console.log('' || null || 0 || 'epa' || 123); //retorna o primeiro valor true, no caso, epa

let nome = '';
console.log(nome || 'Desconhecido'); //Desconhecido

let nome2 = 'Lucas';
console.log(nome2 || 'Desconhecido'); //Lucas