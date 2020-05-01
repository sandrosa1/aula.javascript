
// new gera um novo objeto erdando o protype 
function Pessoa(name) {
    this.name = name;
}
const p = new Pessoa('Guilherme')
console.log(p);
//Pessoa { name: 'Guilherme' }


//caso tenho um retorno esplicito ele não retorna o novo objeto e sim o que está retornado esplicitamente
function Pessoa(name) {
    this.name = name;

    return{
        name: 'Teste'
    };

}
const p2 = new Pessoa('Sandro')
console.log(p2)
//{ name: 'Teste' }

//Exemplo de construção
'use strict';
function Animal(){
    this.qtdePatas = 4;
}
const cachorro = new Animal();
console.log(cachorro);
console.log(cachorro.__proto__=== Animal.prototype);
//true
console.log(Animal.__proto__=== Animal.prototype);
//false

//Outro exemplo com animal
'use strict';
function Animal(qtdePatas){
    this.qtdePatas = 4;
}
function Cachorro(morde){
    Animal.call(this, 4);

    this.morde = morde;
}
const pug = new Cachorro(false);
console.log(pug);

// Implemantando novos methodos com animal e cachorro
function Animal(qtdePatas){
    this.qtdePatas = qtdePatas;
    this.movimentar = function(){}
}

function Cachorro(morde){   // essa função e derivada da animal
    Animal.call(this, 4);      // a funçao call passa um novo contexto this vira pug

    this.morde = morde;
    this.latir = function(){
        console.log('Au! au1');
    }
}
const pug = new Cachorro(false);     // toda vez que der um new cachoro  a fuction vai 
const pitbull = new Cachorro(true);  //ser criada novamente
console.log(pug);
console.log(pitbull);

//solução
'use strict';
function Animal(){}
Animal.prototype.qtdePatas = 0;
Animal.prototype.movimentar = function(){}

function Cachorro(morde){
    this.qtdePatas = 4;
    this.morde = morde;
}
Cachorro.prototype = Object.create(Animal);
Cachorro.prototype.latir = function(){
    console.log('Au! au!');
}
const pug = new Cachorro(false);
const pitbull = new Cachorro(true);
console.log(pug);
console.log(pitbull);