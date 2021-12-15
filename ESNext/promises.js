// Promise
// status Pending/resolved/rejected

function falarDepoisDe(segundos,frase){
    return new Promise(resolve=>{
        setTimeout(()=>{
            resolve(frase);
            //reject(frase)
        }, segundos*1000);
    });
}

// resolve aceita apenas um parametro 

falarDepoisDe(3,'Que legal')
.then(frase => frase.concat('!!!'))
.then(outraFrase => console.log(outraFrase))
.catch(e => console.log(e));

// Async/Await

const http = require("http");


const getTurma = (letra) => {
  const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`;

  return new Promise((resolve,reject)=>{
        http.get(url, res=>{
            let resultado = '';

            res.on('data', dados =>{
                resultado += dados;
            })

            res.on('end',()=>{
                try{
                    resolve(JSON.parse(resultado));
                }catch(e){
                    reject(e);
                }
            })
        })
  });
};


// usando async await
let obterAlunos = async ()=>{
    const turmaA = await getTurma('A');
    const turmaB = await getTurma('B');
    const turmaC = await getTurma('C');

    return [].concat(turmaA,turmaB,turmaC);
};//retorna um objeto asyncFunction

obterAlunos()
    .then(alunos => alunos.map(aluno => aluno.nome))
    .then(nomes => console.log(nomes));