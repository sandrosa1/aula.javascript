/**
 Push = Adiciona um elemento no final do Array e retorna o tamanho

 Pop = Remove o ultimo elemento da um array e retorna o elemento removido

 Unshift = Adiciona um elemento no inicio do array

 Shift = Remove no inicio e retorno o removido

 Concat = Concatena um ou mais array e retorna um novo array sem alterar os antigos

 Slice = Fatia o array conforme coordenadas informadas e retorna a fatia para um novo array

 Splice = Altera um array adicionando novos elementos enquanto remove os antigos elementos
 */
const number = [1,2,8,3,3,6];                 // criado array
const fruts = ['Mamão','Uva','Limão','Amexa'];// criado array
const fruts2 =['Laranja','Jaca','Abacate'];   // criado array
const frutsLenght = fruts.push('Acerola');    //adiciona acerola no array fruts
console.log(frutsLenght);                     // 5
console.log(fruts);                           // [ 'Mamão', 'Uva', 'Limão', 'Amexa', 'Acerola' ] 
const removeItem = fruts.pop('Mamão');        // Retira o Mamão do Array fruts
console.log(removeItem);                      // Acerola
console.log(fruts);                           // [ 'Mamão', 'Uva', 'Limão', 'Amexa' ]
const fruteira = fruts.concat(fruts2);        //Concatena os array fruts e fruts2 e cria novo array fruteira
console.log(fruteira);                        // [ 'Mamão', 'Uva', 'Limão', 'Amexa', 'Laranja', 'Jaca', 'Abacate' ]
const fruteiraSlide = fruteira.slice(1,3);       //Retira as posições 1 ate 2 do array 
const fruteiraSlide = fruteira.slice(2);        //Pega a partir da posição dois 
const fruteiraSlide = fruteira.slice(-3);       //Pega as 3 ultimas posições 
const fruteiraSlide = fruteira.slice(-1);       // pega a ultima posição 
console.log(fruteiraSlide);                      // [ 'Uva', 'Limão' ]
console.log(fruteiraSlide2);                     // [ 'Limão', 'Amexa', 'Laranja', 'Jaca', 'Abacate' ]
console.log(fruteiraSlide3);                     // [ 'Laranja', 'Jaca', 'Abacate' ]
console.log(fruteiraSlide4);                     // [ 'Abacate' ]
console.log(fruteira);                        // [ 'Mamão', 'Uva', 'Limão', 'Amexa', 'Laranja', 'Jaca', 'Abacate' ]
const numberSplice = number.splice(3);
console.log(numberSplice);
console(number);