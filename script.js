//Para abrir um objeto se usa chaves {}

/*
const estudante = {
 nome: 'Túlio',
 sobrenome: 'dos Santos Marques Leitão',
 matricula: 4520434,
 notas: [7, 8, 9],

};
// varias informações dentro de uma mesmo objeto

// cuidado - ao alterar um objeto a original tbm é alterada, como uma array
console.log (estudante);

// adidionando uma nova propriedade ao objeto estudante

estudante.modulo = 'Mósulo 1A';

console.log ('estudante com módulo', estudante); // independente da posição do console.log mudar o objeto faz o todos os objetos serem alterados.

// inprimindo informações de um onbjeto

console.log ('Nome do estudante', estudante.nome);
console.log ('Nota do semestre', estudante.notas[1]);
console.log ('Modulo atual', estudante.modulo);

// fazeno cópia do objeto.

//a copia ainda precisa ter chaves, pois ainda é um ojeto
const copiaEstudante = {...estudante} // ... é spread operator
console.log ('Cópia do objeto', copiaEstudante);

//alterando uma propriedade de um objeto
copiaEstudante.nome = 'Astro Dev';
copiaEstudante.notas.push(9); 
copiaEstudante.modulo = 'Módulo 2A';

console.log ('Mudança de valores', copiaEstudante);

// criando uma Array de objetos

const listaEstudantes = [estudante, copiaEstudante];


console.log ('Array dos estudantes', listaEstudantes); */

const carrinho = {
nome: 'Túlio',
formaDePagamento: 'Dinheiro',
endereço: 'rua dos bobos, número 0'
};
console.log (carrinho);

const compraPossui = {
nomeProduto: 'Raio',
precoProduto: 'R$ 3,50',
quantidade: '4',
};
const compraPossui2 = {
    nomeProduto2: 'Contramágica',
    precoProduto2: 'R$ 8,00',
    quantidade2: '4',
    };

const compras = [compraPossui, compraPossui2];

console.log (compras.length);
console.log (compras);


const carrinhoPresente = {...carrinho};
carrinhoPresente.nome = 'Victor';
carrinhoPresente.formaDePagamento = 'Cartão presente';
console.log ('Carrinho de presente:', carrinhoPresente );






















