const produtos = [
    { nome: 'notebook', preco:2499.99, fragil: true },
    { nome: 'ipad', preco:4100.99, fragil: true },
    { nome: 'copo de vidro', preco:9.99, fragil: true },
    { nome: 'copo de plastico', preco:3.5, fragil: false }
]

//filtra apenas se fragil for igual a true
console.log(produtos.filter(e => e.fragil));
//filtra apenas se fragil for false
console.log(produtos.filter(e => !e.fragil));
//filtra apenas se valor for maior que o determinado na callback
console.log(produtos.filter(e => e.preco > 2000));

