const arr1 = [1,2,3,4];
//const arr2 = new.Array(5,6,7);  //Instancia um novo array
const arr3 = Array.of(1,2,3);  //Instancia com a função of
const persons = Array.of('Sandro','Therza','João Pedro','Luciana');
const numberAndPersons = Array.of(1,5,'João','Thereza');
const arr4 = Array(3); // cria um array de 3 posições vazias
//[ <3 empty items> ]
const arr5 = Array(3,2); // cria um array com os dois numeros

console.log(arr1);
//console.log(arr2);
console.log(arr3);
console.log(persons);
console.log(numberAndPersons);
console.log(arr4);
console.log(arr5);
/**
 [ 1, 2, 3, 4 ]

[ 1, 2, 3 ]
[ 'Sandro', 'Therza', 'João Pedro', 'Luciana' ]
[ 1, 5, 'João', 'Thereza' ]
[ <3 empty items> ]
[ 3, 2 ]
 */

 //array.from cria uma nova instancia de array a partir de um parametro que pode ser um array.like ou um Interable obejct(set.map)
 const divs = document.querySelectorAll('div');// lisata com divs
 const arr7 = Array.from(divs); // Cria um array com essas divs
