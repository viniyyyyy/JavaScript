
// Objeto em JavaScript

var aluno1 = 
{
    // chave   -  valor
    nome: "Doni",
    idade: 27,
    peso: 87.80,
    altura: 2,
}

var aluno2 = 
{
    // chave   -  valor
    nome: "Raul",
    idade: 20,
    peso: 60.30,
    altura: 2,
}

var aluno3 = 
{
    // chave   -  valor
    nome: "Matheus",
    idade: 18,
    peso: 65.9,
    altura: 3,
}

var aluno4 = 
{
    // chave   -  valor
    nome: "Luiz",
    idade: 17,
    peso: 64.5,
    altura: 1.66,
}

var aluno5 = 
{
    // chave   -  valor
    nome: "Vinicius",
    idade: 17,
    peso: 65.3,
    altura: 1.77,
}
 
// Function

function calculoImc(p, a) {
    imc = p / (a*a);
    return imc
}

function printar(n, i, p, a, im){
    console.log(`nome: ${n} | idade: ${i} | peso: ${p} | altura: ${a} | imc: ${im}`)
}

// Descontrução
var {nome:nomeObj, idade:idadeObj, peso:pesoObj, altura:alturaObj} = aluno1
printar(nomeObj, idadeObj, pesoObj, alturaObj, calculoImc(pesoObj, alturaObj))

var {nome:nomeObj, idade:idadeObj, peso:pesoObj, altura:alturaObj} = aluno2
printar(nomeObj, idadeObj, pesoObj, alturaObj, calculoImc(pesoObj, alturaObj))

var {nome:nomeObj, idade:idadeObj, peso:pesoObj, altura:alturaObj} = aluno3
printar(nomeObj, idadeObj, pesoObj, alturaObj, calculoImc(pesoObj, alturaObj))

var {nome:nomeObj, idade:idadeObj, peso:pesoObj, altura:alturaObj} = aluno4
printar(nomeObj, idadeObj, pesoObj, alturaObj, calculoImc(pesoObj, alturaObj))

var {nome:nomeObj, idade:idadeObj, peso:pesoObj, altura:alturaObj} = aluno5
printar(nomeObj, idadeObj, pesoObj, alturaObj, calculoImc(pesoObj, alturaObj))
