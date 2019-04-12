var nome = "TESTE";

let numero1 = 1;
let numero2 = 9

var isAccepted = true;
var objeto = {}

var collection = [];

collection[0] = 1;
collection[1] = "pao de batata";

/*
if (isAccepted) {
    console.log("nah");

    for (i=0; i<2; i++){
        console.log(collection[i]);
    }
}
*/

function somar(valor1, valor2) {
    return valor1 + valor2;
}

if (somar(1, 2) === 3) {
    console.log("OK");
}



objeto.num1 = numero1;
objeto.num2 = numero2;

objeto.funcaoquesoma = somar

console.log(objeto.funcaoquesoma(12, 3));