const users = [ 'Sandro','Pedro','Luciana'];

const gender = {
    MAN: Symbol('M'),
    WOMAN: Symbol('W')
}

const persons = [
    {
        name: 'Sandro',
        age: 44,
        gender:gender.MAN
    },
    {
        name: 'Pedro',
        age: 19,
        gender:gender.MAN
    },
    {
        name: 'Luciana',
        age: 42,
        gender:gender.WOMAN
    },
    {
        name: 'Thereza',
        age: 13,
        gender:gender.WOMAN
    }
];

// // Retorna a quantidade de itens de um array
// console.log('items:',persons.length);

// // Verifica se e array
// console.log('A variavel persons e um array:', Array.isArray(persons));

// //Iterar os items do array
// persons.forEach((person, index, arr) => {
//     console.log('Nome: ${person.name}' );
// });



// // Filter -> filtrar array retorna o que voce pedir
// const mens = persons.filter(person => person.gender === gender.MAN);
// console.log('\nNova lista apensas com homens :', mens);

// const women = persons.filter(person => person.gender === gender.WOMAN);
// console.log('\nNova lista apensas com Mulheres:', women);



// //Retorna um novo sem mecher no array original no exemplo introduzimos o tipo tipo  course  e qual curso o persons estão "Introduçao a javascript" 
// const personWithCouse = persons.map(person => {
//     person.course = 'Introdução a javascript';
//     return person

// });

// console.log('\nPessoas com adição do course:',personWithCouse);


// //Transforma um array em outro tipo de array
// // o Numero zero e o valor inicial da propriedade
// const totalAge = persons.reduce((age, person) => {
//     age += person.age;
//     return age;

// }, 0);

// console.log('\nSoma de idade das pessoas', totalAge);




// Juntando todas as operaçãos

const totalEvensAges = persons.filter(person => person.age % 2 === 0)
.reduce((age, person) => {
    age += person.age;
    return age;

},0);

console.log('\n Soma de idades das pessoas que possuem idade par:',totalEvensAges);
