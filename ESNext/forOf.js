// For of

for(let letra of 'Bruno'){
    console.log(letra);
}

const assuntosECMA = ['Map','Set','Promise'];

for(let assunto of assuntosECMA){
    console.log(x);
}

const assuntosAbordados = new Map(
    ['Map',{ abordado: true }],
    ['Set',{ abordado: true}],
    ['Promise',{ abordado: false}]
);

for(let chave of assuntosAbordados.keys()){
    for(let valor of assuntosAbordados.values()){
        console.log(chave,valor);
    }
}

for(let [ch,vl] of assuntosAbordados.entries()){
    console.log(ch,vl);
}