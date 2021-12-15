const nums = [1,2,3,4,5];

//map apenas cria um novo array e nao modifica o atual
let resultado = nums.map(element=>{
    return element * 2;
})

console.log(resultado);

const soma10 = e => e + 10;
const triplo = e => e * 3;
const paraDinheiro = e => `R$ ${parseFloat(e).toFixed(2).replace('.',',')}`;

resultado = nums.map(soma10).map(triplo).map(paraDinheiro);

console.log(resultado);


const carrinho = [
    '{ "nome": "Borracha", "preco": 3.75 }',
    '{ "nome": "Caderno", "preco": 13.90 }',
    '{ "nome": "Kit de lapis", "preco": 41.22 }',
    '{ "nome": "Caneta", "preco": 7.50 }'
]

const apenasPreco = carrinho.map(json => JSON.parse(json))
                                .map(produto => produto.preco);

console.log(apenasPreco)