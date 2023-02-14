
const button = document.querySelector("#enviar");

button.addEventListener("click", function (e) {
    
    e.preventDefault();

// Objeto em JavaScript

    var aluno = {
    nome : document.getElementById("nome"),
    idade : document.getElementById("idade"),
    peso : document.getElementById("peso"),
    altura : document.getElementById("altura"),
    imc : document.getElementById("imc")
    }
    
// Function

function calculoImc(p, a) {
    imc.value = (p / (a*a)).toFixed(1);
    return imc
}

function printar(n, i, p, a, im){
    console.log(`nome: ${n} | idade: ${i} | peso: ${p} | altura: ${a} | imc: ${im}`)
}

// Descontrução

var {nome:nomeObj, idade:idadeObj, peso:pesoObj, altura:alturaObj} = aluno

printar(nomeObj.value, idadeObj.value, pesoObj.value, alturaObj.value, calculoImc(pesoObj.value, alturaObj.value).value)

});

// Não permitir editar input do imc

const input = document.querySelector("#imc")

console.log(input)

input.disabled = true
