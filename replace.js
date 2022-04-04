// .replace() - substitui um valor por outro, retorna uma nova string com valor alterado, e não muda a string original

const string = 'Isso está muito bom!';

// console.log(string.replace('bom', 'ruim'))
console.log(string.replaceAll(' ', ',')) // o replaceAll altera o elemento a ser substituido, porém altera todos, se houver mais de um