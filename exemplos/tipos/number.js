const myNumber = 12.4032;

//transforma numero para string
const numberAsString = myNumber.toString();
console.log('\ Número transformado em string:', numberAsString, typeof numberAsString);

//Retorna numerocom numero de casas decimais
const fixedTwoDecimal = myNumber.toFixed(2);
console.log('\n Número com duas casas decimais:',fixedTwoDecimal);

// transforma uma string em float
console.log('\nString parseada para float:',parseFloat('13.22'));

//transforma uma string em int
console.log('\nString parseda para int:', parseInt('13.20'))