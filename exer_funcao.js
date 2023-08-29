const prompt = require('prompt-sync')(); // install prompt -> npm install prompt-sync
console.clear();

//Atv 1

// let valor1, valor2, valor3;

// valor1 = Number(prompt("Digite o valor 1: "));
// valor2 = Number(prompt("Digite o valor 2: "));
// valor3 = Number(prompt("Digite o valor 3: "));

// if ((valor1 + valor2) < valor3) {
//     console.log(`Soma de valor 1 (${valor1}) e valor 2 (${valor2}), é ${valor1 + valor2} que é menor que valor 3 que é (${valor3})` );
// }else {
//     console.log(`Soma de valor 1 (${valor1}) e valor 2 (${valor2}), NÃO é  menor que valor 3 que é ( ${valor3})`);
// }

//Atv 2

// let nome = prompt("Informe seu Nome: ");
// let genero = prompt("Informe seu gênero: 'F' para Feminino e 'M' para Masculino  ");
// let estadoCivil = prompt("Informe seu Estado Civil: 1 - Solteira(o), 2- Casada(o) e 3- Divorciada(o)  ");

// if ((genero == "f" || genero == "f") && (estadoCivil == 2)) {
//     let anosCasamento = (prompt(" Informe quantos anos de Casamento: "));
//     console.log("------ Dados Informados ------");
//     console.log(` \n Nome: ${nome} \n Gênero: ${genero} \n Estado Civil: ${estadoCivil} \n Tempo de Casada: ${anosCasamento} anos`);
    
// } else {
//     console.log(console.log("------ Dados Informados ------"));
//     console.log(` \n Nome: ${nome} \n Gênero: ${genero} \n Estado Civil: ${estadoCivil}`);
// }

//Atv 3

// let numero = Number(prompt("Digite um número: "));

// let naoEhZero = (numero != 0);


// if ( ((numero % 2) == 0) && naoEhZero ) {
//     console.log(`O número informado (${numero} é PAR!) `)
// }else if(naoEhZero){
//     console.log(`O número informado (${numero} é IMPAR!) `);
// } else {
//     console.log("O número informado é ${0}, portanto ele é neutro.");
// }

//Atv 4

// let valorA = Number(prompt("Digite o valor de A: "));
// let valorB = Number(prompt("Digite o valor de B: "));

// let resultado;

// if (valorA == valorB) {
//     resultado = valorA + valorB;
//     console.log(`O resultado da Soma dos valores é ${resultado}`);
// } else {
//     resultado = valorA * valorB;
//     console.log(`O resultado da Multiplicação dos valores é ${resultado}`);
// }

//Atv 5

// let numero = Number(prompt("Digite um número: "));
// let resultado;

// if (numero > 0) {
//     resultado = numero * 2;
// }else if (numero < 0) {
//     resultado = numero * 3;
// }

// console.log(`Resultado do cálculo é ${resultado}`);

//Atv 6

// let valor1 = Boolean(Number(prompt("Informe um número: ")));
// let valor2 = Boolean(Number(prompt("Informe outro número: ")));

// console.log("Os valores são iguais? ", (valor1 == valor2));

//Atv 7

// let numero = Number(prompt("Digite um número: "));

// let naoEhZero = (numero != 0);


// if ( ((numero % 2) == 0) && naoEhZero ) {
//     console.log(`O número informado (${numero} é PAR!) `)
//     console.log(`Então a soma dele com o 5 é  ${numero + 5}`);
// }else if(naoEhZero){
//     console.log(`O número informado (${numero} é IMPAR!) `);
//     console.log(`Então a soma dele com o 8 é  ${numero + 8}`);
// } else {
//     console.log("O número informado é ${0}, portanto ele é neutro.");
// }

//Atv 8

let maior, meio, menor;

let v1 = Number(prompt("Digite um valor: "));
let v2 = Number(prompt("Digite mais um valor: "));
let v3 = Number(prompt("Digite outro valor: "));

if (v1 > v2 && v1 > v3 && v2 > v3) {
    maior = v1;
    meio = v2;
    menor = v3;
} else if (v1 > v2 && v1 > v3 && v3 > v2){
    maior = v1;
    meio = v3;
    menor = v2;
}
console.log(maior, meio, menor );