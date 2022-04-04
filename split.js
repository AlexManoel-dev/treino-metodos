// .split() - transforma strings em array por separadores, não modifica a string original
// Só pode ser usado em strings

// const languages = ['js', 'java', 'python', 'ruby', 'elixir'];

//const string = languages.toString(); // Assim você une todos elementos do array em uma string
//const randomValues = string.split(',', 3) // Assim você os separa novamente

// Exemplo real
const hour = '10:00:00'
console.log(hour.split(':', 2).toString().replace(',', ':'));

const test = 'Isso é um teste';

const stringIntoArray = test.split(' ') // Transforma a string em array, baseado no separador ' '

const randomValues = test.split(' ', 3) // Procura por 0 ou mais espaços em uma string e retorna as 3 primeiras divisões que encontrar.

const specifiedValue = test.split(' ')[0] // Retorna um valor especificado dentro do array

const lastValue = stringIntoArray[stringIntoArray.length - 1] // Retorna o último elemento do array, e somente nesse caso você não consegue fazer diretamente com o split, tem que já estar atribuído o array a uma variável

const lastIndex = test.split(' ').length - 1;

const length = test.length;

console.log(test);
console.log(stringIntoArray);
console.log(randomValues);
console.log(specifiedValue);
console.log(lastValue);
console.log(lastIndex);
console.log(length); // Tamanho da string
console.log(stringIntoArray.length); // Tamango da string transformada em array