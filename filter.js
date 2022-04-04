// .filter() - faz basicmente o filtro que você desjar, e ao invés de modificar o vetor, vai criar um array novo a partir do antigo

const languages = ['js', 'java', 'python', 'ruby', 'elixir'];

const languagesWithoutPython = languages.filter(language => language !== 'python');
                                  
console.log(languagesWithoutPython);
console.log(languages.filter(language => language !== 'python')); // Pode ser feito somente em uma linhas