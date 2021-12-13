// let e const
//let tem escopo de bloco
{
  var a = 2;
  let b = 3;
  // aqui a variavel b seria visivel
}

console.log(a); //-> 2
//console.log(b);-> erro

// Template string | pode conter ate mesmo quebra de linhas
const apple = "ipad";
console.log(`${apple} é caro`); // -< ipad é caro

// Destructuring
const [l, e, ...tras] = "Bruno";
console.log(l, e, tras); //-> B r uno

const [x, , y] = [1, 2, 3];
console.log(x, y); // -> 1 3

const { nome: n, idade } = { nome: "Bruno", idade: 24 };
console.log(n, idade); // -> Bruno 24

// Arrow functions

// parenteses necessario se haver mais de um parametro
// se os retorno nao for explicito deve se retornar a funcao | return a+b e,g
const soma = (a, b) => a + b;
console.log(soma(2, 3)); // -> 5

// Arrow function(this)

const lexico = () => console.log(this === exports);
const lexico2 = lexico.bind({});
// ambas continuam a apontar para o modulo exports
lexico();
lexico2();

// Parametro default
function log(texto = "node") {
  console.log(texto);
}

//se passar nulo,sera nulo, se passar undefined, sera valor padrao
// se passar um texto qualquer esse sera mais forte
log(); // -> node

// Operador rest
// agrupa todos os parametros em um array
function total(...numeros) {
  let total = 0;
  numeros.forEach((n) => (total += n));

  return total;
}

console.log(total(2, 3, 4, 5)); // -> 14

// ES8  object.values / object.entries
const obj = { a: 1, b: 2, c: 3 };
console.log(Object.values(obj)); // -> [1,2,3]
console.log(Object.entries(obj)); // -> ['a',1]['b',2]['c',3]]

// simplificacao de criacao de objetos com base em variaveis/constantes

const nome = "Ana";
const pessoa = {
  nome, // antigamente era nome: nome
  ola() {
    console.log(`ola, ${nome}`); // antigamente era ola: function(){}
  },
};

console.log(pessoa.nome, pessoa.ola);

// Class

class Animal {} // declaracao de classe
class Cachorro extends Animal {} // heranca
