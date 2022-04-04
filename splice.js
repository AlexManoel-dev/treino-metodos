// .splice() - não possui retorno, e apaga uma quantidade específica de elementos a partir de um index específico, muta o array
// Só pode ser usado em arrays

const languages = ['js', 'java', 'python', 'ruby', 'elixir'];

languages.splice(1, 1); // Vai até o index 1 que é o java, e exclui somente 1, se colocasse 2, apagaria java e python
console.log(languages);

// --------------------------------------------------------------------

languages.splice(2, 0, 'C++'); // Forma de adicionar elementos com splice, no primeiro parâmetro se especifica o index onde vai ser adicionado, e no segundo quantos vai remover, e no terceiro o que irá adicionar
// Se colocar 0 no de remoção, ele substitui o antigo elemento do index especificado pelo novo elemento , mas não o remove, só os movem para uma posição à frente. Logo, altera as posições dos posteriores
languages.splice(2, 0, 'C++', 'C#');// É possível adicionar mais de um elemento também
console.log(languages);