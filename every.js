// .every() - booleano, retorna true apenas quando todos os objetos possuem a condição desejada

// Vamos pensar com o Array de pedidos que já usamos. Nosso Chefe só pode fazer pedidos que tem o tipo de bebida = refrigerante.

const pedidos = [
    {'id': 420, 'nome':'Dener', 'alimento': 'Sandubão de Bacon', 'bebida': 'Suco Limão' },
    {'id': 152, 'nome':'Naiady', 'alimento': 'Sandubão Vegano', 'bebida': 'Suco de Laranja' },
    {'id': 29, 'nome':'Marcio', 'alimento': 'Coxinha', 'bebida': 'Suco de Uva' },
    {'id': 33, 'nome':'Isabel', 'alimento': 'Sandubão de Picanha', 'bebida': 'Refrigerante' },
    {'id': 55, 'nome':'José', 'alimento': 'Pizza', 'bebida': 'Refrigerante' }
];

const every = pedidos.every(( pedido ) => {
    let { bebida } = pedido
    return bebida == "Refrigerante";
});
console.log(every) // false