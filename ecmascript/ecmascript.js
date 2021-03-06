"use strict";
// let & const
let seraQuePode = '?';
console.log(seraQuePode);
let estaFrio = true;
if (estaFrio) {
    let acao = 'Colocar o casaco!';
    console.log(acao);
}
const cpf = "123.456.000-99";
console.log(cpf);
//Arrow Function
function somar(n1, n2) {
    return n1 + n2;
}
console.log(somar(2, 2));
const subtrair = (n1, n2) => n1 - n2;
console.log(subtrair(2, 3));
const saudacao = () => console.log("Olá!");
saudacao();
const falarCom = (pessoa) => console.log('Ola ' + pessoa);
falarCom('João');
// // this
// function normalComThis() {
//     console.log(this)
// }
// const normalComThisEspecial = normalComThis.bind(2)
// normalComThisEspecial()
// //this???
// console.log(this)
// const arrowComThis = () => console.log(this)
// arrowComThis()
// const arrowComThisEspecial = arrowComThis.bind(2)
// arrowComThisEspecial()
// Parâmetros padrão
function contagemRegressiva(inicio = 3) {
    console.log(inicio);
    while (inicio > 0) {
        inicio--;
        console.log(inicio);
    }
    console.log("Fim!");
}
contagemRegressiva();
// Spread
const numbers = [1, 10, 99, -5];
console.log(Math.max(...numbers));
const turmaA = ['João', 'Maria', 'Fernanda'];
const turmaB = ['Fernando', 'Miguel', 'Lorena', ...turmaA];
console.log(turmaB);
// Rest
function retornarArray(a, ...args) {
    console.log(a);
    return args;
}
const numeros = retornarArray(1, 2, 3, 4, 5, 6);
console.log(numeros);
// Rest & Spread (Tupla)
const tupla = [1, 'abc', false];
function tuplaParam1(a, b, c) {
    console.log(`1) ${a} ${b} ${c}`);
}
tuplaParam1(...tupla);
function tuplaParam2(...params) {
    console.log(Array.isArray(params));
    console.log(`2) ${params[0]} ${params[1]} ${params[2]}`);
}
tuplaParam2(...tupla);
// Desctructuring (array)
const caracteristicas = ['Motor Zetec 1.8', 2020];
// const motor = caracteristicas[0]
// const ano = caracteristicas[1]
const [motor, ano] = caracteristicas;
console.log(motor);
console.log(ano);
//Destructuring (objeto)
const item = {
    nome: 'SSD 480GB',
    preco: 200,
    caracteristicas: {
        tipo: 'Importado'
    }
};
// const nomeItem = item.nome
// const precoItem = item.preco
const { nome: n, preco: p, caracteristicas: { tipo: t } } = item;
console.log(n);
console.log(p);
console.log(t);
// Template string
const usuarioID = 'SuporteCod3r';
const notificacoes = '9';
// const boasVindas = 'Boas vindas ' + usuarioID + 'Notificações: ' + notificacoes
const boasVindas = `Boas vindas ${usuarioID}, Notificações: ${parseInt(notificacoes) > 9 ? '+9' : notificacoes}`;
console.log(boasVindas);
// Exercicio 1
const dobro = (valor) => valor * 2;
console.log(dobro(10));
// Exercicio 2
const dizerOla = function (nome = 'Pessoa') {
    console.log(`Ola, ${nome === undefined ? "Pessoa" : nome}`);
};
dizerOla();
dizerOla("Anna");
// Exercicio 3
const nums = [-3, 33, 38, 5];
console.log(Math.min(...nums));
// Exercicio 4
const array = [55, 20];
array.push(...nums);
console.log(array);
// Exercicio 5
const notas = [8.5, 6.3, 9.4];
const [notas1, notas2, notas3] = notas;
console.log(notas1, notas2, notas3);
// Exercicio 6
const cientista = {
    primeiroNome: "Will",
    experiencia: 12
};
const { primeiroNome, experiencia } = cientista;
console.log(primeiroNome, experiencia);
// // Callback
// function esperar3s(callback: (dado: string) => void) {
//     setTimeout(() => {
//         callback('3s depois...')
//     }, 3000)
// }
// esperar3s(function(resultado: string) {
//     console.log(resultado)
// })
// // Promise
// function esperar3sPromise() {
//     return new Promise((resolve: any) => {
//         setTimeout(() => {
//             resolve('3s depois promise...')
//         }, 3000)
//     })
// }
// esperar3sPromise().then(dado => console.log(dado))
fetch('https://swapi.dev/api/people/1')
    .then(res => res.json())
    .then(personagem => personagem.films)
    .then(films => fetch(films[0]))
    .then(resFilm => resFilm.json())
    .then(filme => console.log(filme.title))
    .catch(err => console.log('Catch!!!' + err));
//# sourceMappingURL=ecmascript.js.map