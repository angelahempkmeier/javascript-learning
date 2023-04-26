// tipo de triangulo, abstraindo a existência ou não dele

function tipoDeTriangulo(l1, l2, l3){
    if(l1 === l2 && l2 === l3){
        console.log('Triângulo Equilátero.');
    }else if(l1 !== l2 && l2 !== l3 ){
        console.log('Triângulo Escaleno.');
    }else{
        console.log('Triângulo Isósceles.');
    }
}

const triangulo = tipoDeTriangulo(2, 2, 2);

