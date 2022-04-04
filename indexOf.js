// .indexOf - identifica o index de um elemento dentro de um array de


const languages = ['js', 'java', 'python', 'ruby', 'elixir']; // length = 5

console.log(languages.indexOf('java')); // 1

// É possível fornecer um ponto inicial
// Se esse ponto for depois do elemento que você quer achar, ele retorna -1
// Se for maior ou igual o tamanho do array, também retornará -1
// Se for negativo, o deslocamento se da na extremidade do array, ou seja, do 0, e a pesquisa será feita de frente para trás. Padrão: 0 (pesquisa em todo array)
// Se o ponto inicial fornecido é 0, então o array inteiro será pesquisado. Padrão: 0 (pesquisa em todo array)
// O -1 significa que o elemento não será procurado
console.log(languages.indexOf('js', 2)); // -1  Está tentando procurar o elemento antes do ponto inicial

console.log(languages.indexOf('js', 5)); // -1  Está tentando procurar o elemento a partir do tamanho do array

console.log(languages.indexOf('js', 6)); // -1  Está tentando procurar o elemento a partir de um tamanho maior que do array

console.log(languages.indexOf('js', -100)); // 0

console.log(languages.indexOf('js', 0)); // 0