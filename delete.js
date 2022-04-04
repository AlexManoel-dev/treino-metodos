// delete - deixa um campo específico o valor null, e é contra indicado, porém se o valor tiver que ficar somente naquele index, é perfeito para tal situação

const languages = ['js', 'java', 'python', 'ruby', 'elixir'];

delete languages[3];

console.log(languages);