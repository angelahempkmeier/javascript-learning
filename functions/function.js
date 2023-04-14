//forma literal
function fun1(){

}

//armazenando em uma variavel
const fun2 = function () {

}

//armazenar em um array
const array = [function(a,b) {
    return a+b;
}, fun1, fun2]

console.log(array[0](2,3));

//armazenar em um atributo de objeto
const obj = {

}

obj.falar = function (){
    return 'Opa';
}
console.log(obj.falar());

//funcao como param para outra funcao
function run(fun){
    fun();
}

run(function() {console.log('executando')})


//arguments
function soma(){
    let soma = 0;
    for(i in arguments){
        soma += arguments[i];
    }
    return soma;
}

console.log(soma(1, 2, 3));

//default
    //metodo 1, dá problema com o número 0
function soma1(a, b, c){
    a = a || 1;
    b = b || 1;
    c = c || 1;

    return a + b + c;
}
    //metodo 2
function soma2(a, b, c){
    a = a !== undefined ? a : 1;
    b = 1 in arguments ? b : 1; //se eu tivesse testando com o c, teria que ser 2 in arguments, pq ele pega o indice
    c = isNaN(c) ? 1 : c; //estrategia mais segura pra esse tipo de situacao

    return a + b + c;
}
    //metodo 3, es() 
function soma3(a = 1, b = 1, c = 1) {
    return a + b + c;
}


