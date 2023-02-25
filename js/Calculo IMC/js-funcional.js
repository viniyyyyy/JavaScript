
const button = document.querySelector("#enviar");

button.addEventListener("click", function (e) {
    
    e.preventDefault();

// Objeto em JavaScript

    var aluno = {
    nome : document.getElementById("nome"),
    idade : document.getElementById("idade"),
    peso : document.getElementById("peso"),
    altura : document.getElementById("altura"),
    imc : document.getElementById("imc"),
    categoria : document.getElementById("categoria")
    }
    
// Function para calcular o IMC

function calculoImc(p, a) {
    imc.value = (p / (a*a)).toFixed(1);
    return imc
}

// Function para definir a categoria do IMC

function grauImc(c) {

    c = imc.value;

    if (c <= 18.5) {
        $cod = 1
        return c = "Você está abaixo do peso";

    } else if (c >= 18.6 && c <= 24.9 ) {
        $cod = 2
        return c = "Você está com peso nomral";

    } else if (c >= 25 && c <= 29.9 ) {
        $cod = 3
        return c = "Você está sobrepeso";

    } else if (c >= 30 && c <= 34.9 ) {
        $cod = 4
        return c = "Você está com obesidade grau 1";

    } else if (c >= 35 && c <= 39.9 ) {
        $cod = 5
        return c = "Você está com obesidade gra 2";

    } else if (c >= 40 ) { 
        $cod = 6
        return c = "Você está com obesidade grau 3";
        
    }
    return c
}

// Function para calcular a quantidade de alunos em cada categoria

function qtndAlunoCat() {

    var codigo = grauImc().$cod
    
    if (codigo == 1) {
        console.log("abaixo peso")
        return codigo

    } else if (codigo == 2) {
        console.log("peso nomral")
        return codigo

    } else if (codigo == 3) {
        console.log("sobrepeso")
        return codigo

    } else if (codigo == 4) {
        console.log("obesidade 1")
        return codigo

    } else if (codigo == 5) {
        console.log("obesidade 2")
        return codigo

    } else if (codigo == 6) {
        console.log("obesidade 3")
        return codigo

    }
    return codigo
}

console.log(qtndAlunoCat())

// Function para calcular a quantidade de alunos em cada categoria

function printar(n, i, p, a, im, c){
    console.log(`Nome: ${n} | Idade: ${i} | Peso: ${p} | Altura: ${a} | Imc: ${im} | Categoria: ${c}`)
}

// Descontrução

var {nome:nomeObj, idade:idadeObj, peso:pesoObj, altura:alturaObj} = aluno

printar(nomeObj.value, idadeObj.value, pesoObj.value, alturaObj.value, calculoImc(pesoObj.value, alturaObj.value).value, grauImc())

// grauImc(calculoImc(pesoObj.value, alturaObj.value).value)

// Tabela dos alunos com IMC efetuado

let tabelaImc = [{
    nome : document.getElementById("nome"),
    idade : document.getElementById("idade"),
    peso : document.getElementById("peso"),
    altura : document.getElementById("altura"),
    imc : document.getElementById("imc"),
    categoria : document.getElementById("categoria")
}]
console.table(tabelaImc);

});


// Não permitir editar input do imc

const input = document.querySelector("#imc")
const input2 = document.querySelector("#categoria")

input.disabled = true
input2.disabled = true
