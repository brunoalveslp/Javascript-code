// ... mesmo operador duas nomenclaturas
// rest(ajuntar)/spread(espalhar)

//usar rest com funcao

//usar spread com objeto

const funcionario = { nome: 'Maria', salario: 3000 };
const clone = { ativo: true, ...funcionario };

//spread com array
const grupoA = ['Hellblazer','John','Constantine'];
const grupoFinal = ['Lucifer','Papa',...grupoA,'Gabriel'];