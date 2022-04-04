// .find() - retorna somente o 1 valor, se tiver, retorna somente o primeiro

const pedidos = [
    {'id': 420, 'nome':'Dener', 'alimento': 'Sandubão de Bacon', 'bebida': 'Suco Limão' },
    {'id': 152, 'nome':'Naiady', 'alimento': 'Sandubão Vegano', 'bebida': 'Suco de Laranja' },
    {'id': 29, 'nome':'Marcio', 'alimento': 'Coxinha', 'bebida': 'Suco de Uva' },
    {'id': 33, 'nome':'Isabel', 'alimento': 'Sandubão de Picanha', 'bebida': 'Refrigerante' },
    {'id': 55, 'nome':'José', 'alimento': 'Pizza', 'bebida': 'Refrigerante' }
];

const find = pedidos.find(( pedido ) => {
    return pedido.id == 420;
});

console.log(find);