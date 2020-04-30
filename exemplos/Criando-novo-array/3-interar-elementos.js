/**
Foreach = Itera cada elemento de um array 

Map = Retorna um novo array do array

Flat = Retorna um novo array com todos os elementos de um sub array concatenando de foram recursiva
de acordo com a profundidade especificada [p1,p1,[p2,[p3],p2,p2],p1]

Flatmap = Retorna um novo array asim como na função map e executa um flat de profundidade 1

Keys = Retorna um array iterator que contem as chaves para cad elemento da array

Values = Retorna um array iterator que contém os valores para cada elemento do array

Entries = Retorna um array iterator que contém pares chaves / valores para cada elemento do array

Find = Retorna o primeiro item do array que satisfaça a condição

Findindex = Retorna o índice do primeiro de um array que satifaça a condição

Filter = Retorna um array com todos os elementos que satisfação a condição

Indexof = Retorna o primeiro ìndice em que o elemento requisitado foi encontrado no array

Lastindexof = Retorna o ultimo índice do array em que um elemento pode sre encontrado

Includes = Retorna um booleano  verificando se um determinado elemento esta presente em um array

Some = Retorna um true verificando se ha pelo menos um item do array que satisfaça a condição

Every = Retorna um true se todos os items satisfação a condição

Sort = Ordena elementos do array de acordo com a condição

Reverte = Reverte o sentido do array

Join = converte um array de um tipo de dado para outro tipo juntando no formato string 

Reduce =  Retorna um novo tipo de dado interando cada posição de um array
*/

const arr = [1,2,8,3,3,6];                 // criado array
const fruts = ['Mamão','Uva','Limão','Amexa'];// criado array
const fruts2 =['Laranja','Jaca','Abacate'];   // criado array
fruts.forEach(fruts => console.log(fruts));  
//Mamão
//Uva
//Limão
//Amexa
fruts.forEach((fruts, index) => console.log(index, fruts));
//0 'Mamão'
//1 'Uva'
//2 'Limão'
//3 'Amexa'  
fruts.forEach((fruts, index, arr) => console.log(index, fruts, arr));
//0 'Mamão' [ 'Mamão', 'Uva', 'Limão', 'Amexa' ]
//1 'Uva' [ 'Mamão', 'Uva', 'Limão', 'Amexa' ]
//2 'Limão' [ 'Mamão', 'Uva', 'Limão', 'Amexa' ]
//3 'Amexa' [ 'Mamão', 'Uva', 'Limão', 'Amexa' ]
const arr1 = arr.map(value => value * 2);
console.log(arr1);