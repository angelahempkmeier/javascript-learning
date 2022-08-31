const valores = [7, 8.9, 6.3, 9.2];
console.log(valores[0], valores[3]);
console.log(valores[4]); //undefined

valores[4] = 10;
console.log(valores);

///valores[10] = 10;
//console.log(valores); //<5 empty items>
console.log(valores.length); 

valores.push({id: 3}, false, null, 'teste');
console.log(valores);
console.log(valores.pop());
console.log(valores);
delete valores[0];
console.log(valores);
console.log(typeof valores); //objeto