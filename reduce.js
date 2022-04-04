// .reduce - usado para somar, sum é o acumulador e segundo parâmetro é o que percorre o array. O 0 é o valor inicial, caso queira somar a partir de um valor, só substituí-lo pelo valor ou variável

const languages = [
  {
    title: 'js',
    users: 1000
  },
  {
    tilte: 'java',
    users: 2000
  },
  {
    title: 'python',
    users: 3000
  },
  {
    title: 'ruby',
    users: 4000
  },
  {
    title: 'elixir',
    users: 5000
  }
];

const totalUsers = languages.reduce((sum, language) => {
  return sum + language.users
}, 0);

console.log(totalUsers);