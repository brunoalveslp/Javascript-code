// Map
//declaracao
const tecnologias = new Map();
// adicao de valores
tecnologias.set("React", { framework: false });
tecnologias.set("Angular", { framework: true });

console.log(tecnologias.get("React")); //retorna framework false
console.log(tecnologias.get("React").framework); //retorna false

//map pode ter todo tipo de chave alem de string
const chavesVariadas = new Map(
  [function () {}, "funcao"],
  [{}, "objeto"],
  [1, "numero"]
);

chavesVariadas.forEach((ch, vl) => {
  console.log(ch, vl);
});

console.log(chavesVariadas.has(1)); //> true
chavesVariadas.delete(1); //deleta o valor e retorna se o elemento existia ou nao
console.log(chavesVariadas.has(1)); // false
console.log(chavesVariadas.size()); //> 2

chavesVariadas.set(123, "a"); //cria o valor
// nao aceita repeticao de chave
// portanto o valor interno sera alterado
chavesVariadas.set(123, "b");
chavesVariadas.set(456, "c");

console.log(chavesVariadas);

// SET
// conjunto nao indexado que nao aceita repeticao
const times = new Set();
times.add("Athletico");
times.add("Corinthians").add("Palmeiras").add("Sao Paulo");
times.add("Flamengo");
times.add("Athletico"); //nao sera adicionado

console.log(times);
console.log(times.size); // 5
console.log(times.has("athletico")); //false, its casesensitive
console.log(times.has("Athletico")); //true
times.delete("Flamengo"); // true
console.log(times.has("Flamengo")); //false

const nomes = ["Bruno", "Bruno", "Julia", "John"];
const nomesSet = new Set(nomes); //Bruno seta adicionado apenas uma vez

