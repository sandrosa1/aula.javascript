/**
 if (condition) {
     //code
 } else if (condition){
     //code
 }
 */
// Nesse caso o numero 6 e divisivil por 2 e 3 mais cai na primeira condição e nao segue para proxima
const array = [2,3,4,5,6,8,10,15];

console.log('\nelse if');
array.forEach(item => {
    if(item % 2 === 0) {
        console.log('O numero'+item,'é divisivel por 2');
    } else if (item % 3 === 0) {
        console.log('O numero'+item,'é divisivel por 3');
    } else if (item % 5 === 0) {
        console.log('O numero'+item,'é divisivel por 5');
    }
});


/// neste outro exemplo ele e verificado em todos
console.log('\nelse if');
array.forEach(item => {
    if(item % 2 === 0) {
        console.log('O numero'+item,'é divisivel por 2');
    } 
    if (item % 3 === 0) {
        console.log('O numero'+item,'é divisivel por 3');
    }
    if (item % 5 === 0) {
        console.log('O numero'+item,'é divisivel por 5');
    }
});