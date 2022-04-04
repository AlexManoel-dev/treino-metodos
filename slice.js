// .slice() - O método slice() copia uma parte de um array e o retorna como um novo array. Isso não modifica o array original.
// Pode ser usado para arrays e strings

let array = [1, 2, 3, "hello world", 4.12, true];

let newArray = array.slice(0, 3);   // O valor retornado também será um array

console.log(array);
console.log(newArray);