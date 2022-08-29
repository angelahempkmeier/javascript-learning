let a = 7;
let b = 94;
let x;

//Realizando a troca das variáveis:
x = a;
a = b;
b = x;

console.log("a = " + a);
console.log("b = " + b);

//Forma mais direta da troca pelo JS:
[a, b] = [b, a];
console.log(a,b);