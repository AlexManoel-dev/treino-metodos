// .unshift() - adiciona um elemento no início do array

const languages = ['js', 'java', 'python', 'ruby', 'elixir'];

languages.unshift('C#'); // [ 'C#', 'js', 'java', 'python', 'ruby', 'elixir' ]

languages.unshift('C#', 'C++'); // ['C#', 'C++', 'js', 'java', 'python', 'ruby', 'elixir']

languages.unshift({language: 'C++'}); // [ [ 'C++' ], 'js', 'java', 'python', 'ruby', 'elixir' ]

languages.unshift(['C++']); // [ { language: 'C++' }, 'js', 'java', 'python', 'ruby', 'elixir' ]

console.log(languages);