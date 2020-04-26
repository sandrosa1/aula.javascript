const user = {
    nome: 'Sandro',
    lastName: 'Amâncio de Sá'
};
//Recuperar uas chaves de um object
console.log('Propriedades do objeto user:', Object.keys(user));

//Recuprar o valor das chaves do object
console.log('\nValores das propriedades objeto user:', Object.values(user));

//Retorna um array de arrays contendo [Nome_prop, valor_prop]
console.log('\nLista de propriedades e valores:', Object.entries(user));

// Mergear (concatena) propriedades de objetos
Object.assign(user, {fullName: 'Amâncio de Sá'});

console.log('\nAdiciona a propriedade fullName no objeto user', user);
console.log('\nRetorna um objeto mergeado dois ou mais objetos', Object.assign({}, user, {age: 26}));

//previne todas alterações em um objeto
const newObj ={ foo: 'bar'};
//Object.freeze(newObj);


newObj.foo = 'changes';
//delete newObj.foo;
newObj.bar = 'foo';

console.log('\nVariavel newObj após as ateracoes;',newObj);

//Permite apenas a alterção de propriedades existentes em um objeto
const person = { name: 'Sandro'};
Object.seal(person);

person.name = 'Sandro Amâncio ';
//delete person.name;
person.age =26;

console.log('\n Variavel person após alterções:', person);

