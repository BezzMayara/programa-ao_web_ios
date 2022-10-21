let sal = 10;
let açucar = 8;
let agua = 6;

if (sal< açucar && sal < agua) {
    console.log(`esse é o menor preço ${sal}`);
} else if (açucar < sal && açucar < agua) {
    console.log(`esse é o menor preço ${açucar}`);
} else {
    console.log(`esse é o menor preço R$${agua.toFixed(2)}`);
}

let num1 = 35;
let num2 = 76;
let num3 = 100;
let maior = 0;
let meio = 0;
let menor = 0;

if (num1 > num2 && num1 > num3) {
    maior = num1;

    if (num2 > num3) {
        meio = num2;
        menor = num3;
    } else {
        menor = num2;
        meio = num3;
    }
}
if (num1 < num2 && num1 < num3) {
    menor = num1;
    if (num2 > num3) {
        maior = num2;
        meio = num3;
    } else {
        maior = num3;
        meio = num2;
    }
} else {
    meio = num1;
    if (num2 > num3) {
        maior = num2;
        menor = num3;
    } else {
        maior = num3;
        menor = num2;
    }
}

console.log(`${menor} ${meio} ${maior}`);

let ano = 2024;

if (ano % 4 == 0 || ano % 400 == 0) {
    console.log(`${ano} é um ano é bissexto tem 366 dias`);
} else {
    console.log(`${ano} não é um ano é bissexto tem 365 dias`);
}
