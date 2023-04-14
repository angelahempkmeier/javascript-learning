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