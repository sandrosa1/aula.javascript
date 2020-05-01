const symbol1 = Symbol();
const symbol2 = Symbol();
// Symbols São unicos
console.log('\nsymbol1 e igual a symbol2:',symbol1 === symbol2);
//Symbol sPrevinir conflitos entre nomes de propriedades 
const nameSymbol1 = Symbol('name');
const nameSymbol2 = Symbol('name');

const user = {
    [nameSymbol1]: 'Sandro',
    [nameSymbol2]: 'Outro nome',
    lastName: 'Amâncio de sá'
}

console.log(user);

//Symbols criam propriedades que nõa são enumberables
for(const key in user ) {
    if (user.hasOwnProperty(key)) {
        console.log('\n valor da chave ${key}: ${user[key]}');
    }
}

console.log('Propriedades do objeto user:',Object.keys(user));
console.log('Valores da propriedade do objeto user:',Object.values(user));

//Exibir symbols de um obejto
console.log('symbols registrados do objeto user:', Object.getOwnPropertySymbols(user));

//Acessando todas as propriedades do objeto
console.log('Todas as propriedades do objeto user:',Reflect.ownKeys(user));

// criar um enum
const directions = {
    UP   : Symbol( 'UP' ),
    DOWN : Symbol( 'DOWN' ),
    LEFT : Symbol( 'LEFT' ),
    RIGHT: Symbol('RIGHT')
};