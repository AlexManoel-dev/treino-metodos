const pedidos = [
    { id: 420, nome:'Dener', alimento: 'Sandubão de Bacon', bebida: 'Suco Limão' },
    { id: 152, nome:'Naiady', alimento: 'Sandubão Vegano', bebida: 'Suco de Laranja' },
    { id: 29, nome:'Marcio', alimento: 'Coxinha', bebida: 'Suco de Uva' },
    { id: 33, nome:'Isabel', alimento: 'Sandubão de Picanha', bebida: 'Refrigerante' },
    { id: 55, nome:'José', alimento: 'Pizza', bebida: 'Refrigerante' }
];

pedidos.forEach((pedido, index) => {
    let { nome, alimento, bebida } = pedido; //  A desestruturação é feita aqui. É necessário colocar todos os parâmetros dentro da chave, igual à variável locando que está sendo percorrida
    console.log(`${index} - O Cliente: ${nome} fez o pedido do alimento: ${alimento} e a bebida: ${bebida}.`);
})