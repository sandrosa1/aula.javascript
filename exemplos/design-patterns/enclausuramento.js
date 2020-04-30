/**Formato de um pattern
 nome
 exemplo
 contexto
problema
 solução
 * 
 * São categoriizados em tres tipos: Criação/Estruturais/comportamentais
 * 
 Dentro dos padroes de criação temos:
 Abstract Factory/ Builder/ Factory Method/ Prototype/ Singleton

 Dentro dos padroes de Estruturais temos:
 Adapter/ Bridge/ Composite/ Decorator/ Facade/ Business Delegate/ Flyweight/Proxy

 entro dos padroes de Comportamentais temos:
 Chain of Reponsibility/ Command/ Interpreter/ Ilerator
*/
//Os mais usandos no javascript são:

Factory
//Todas as funções que retornan um objeto sem necessidade de chama-las com (new)são consideradas factory

// Nãoooo e Factory
function FakeUser(){
    this.name ='Sandro';
    this.lastName ='Amâncio';
}
const user = new FakeUser();
console.log(user);

//E uma Factory
function FakeUser(){
    return{
        name:'Sandro',
        lastName:'Amâncio'
    }
};
const user = FakeUser();
console.log(user);

//Outro exemplo passando atributo
function Pessoa(name){
    return{
        name,
        lastName:'Amâncio'
    }
}
const P = Pessoa('Cantor de Samba');
console.log(P);


function Pessoa(custoPropriets){
    return{
        name:'Sandro',
        lastName:'Amâncio';
        ...custoPropriets
    }
}
const P = Pessoa({name:'custon name',age:44});
console.log(P);


Singleton
//obejetivo dessa parttern e criar uma unica estancia de uma função construtora e retornala toda vez em que for necessaria utilizala.Um exemplo e o jquery.
// Exemplo pode ser uma variavel global
var settings = {
    api: 'http/ localhost',
    trackJsToken: '12345'
}
//pode ser um function
function MyApp(){
    if(!MyApp.instance){
        MyApp.instance = this;
    }
    return MyApp.instance;
}

//outro exemplo
function Pessoa(){
    if(!Pessoa.instance){
        Pessoa.instance = this;
    }
    return Pessoa.instance;
}
const P = Pessoa.call({name:'Sandro'});
const P2 = Pessoa.call({name:'Custon name'});
console.log(P);
console.log(P2)
//{ name: 'Sandro' }
//{ name: 'Sandro' }  sempre retorna mesma instancia

Decorator
//Recebe um outra função como parametro e extende seu comportamento sem modifica-la explicitamente
//Exemplo
let = loggedIn = false;
function callIfAuthenticated(fn){
    return !!loggedIn &&  fn();
}
function sum(a, b){
    return a + b;
}
console.log(callIfAuthenticated(()=> sum(2, 3)));
let = loggedIn = true;
console.log(callIfAuthenticated(()=> sum(2, 3)));
let = loggedIn = false;
console.log(callIfAuthenticated(()=> sum(2, 3)));



Observer
//A estancia Subscriber mantem uma coleção de objeto (Obeservers) e notifica todos eles quando ocorre uma mudança no estado.
// Exemplo
class Obeservable {
    constructor(){
        this.observables = []
    }
    subscribe(fn){
        this.observables.push(fn);
    }
    unsubscribe(f){
        this.observables = this.observables.filter(subscribe => subscribe !== f)
    }
    notify(data){
        this.observables.forEach(observables => observables(data));
    }
}

const o = new Obeservable();
const logData1 = data => console.log('Subscrite- 1', + data);
const logData2 = data => console.log('Subscrite- 2', + data);
const logData3 = data => console.log('Subscrite- 3', + data);

o.subscribe(logData1);
o.subscribe(logData2);
o.subscribe(logData3);

o.notify('notified 1');

o.unsubscribe(logData2);

o.notify('notified 2');



Module

const {getName, setName} = require('./05 module.js');

console.log(getName());
console.log(setName('Sandro'));
console.log(getName());

 
