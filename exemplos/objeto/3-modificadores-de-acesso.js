// java script não tem suport nos browser
function Person(initialName){
    let name = initialName;

    this.getName = function() {
        return name;
    }
    this.setName = function(newName) {
        name = newName;
    }
}
const p = new Person('Guilherme');
/////////////////////////////////////////////////////
console.log(p);

 p.getName();

 p.name;

 p.setName('Thiago');
 p.getName();



 // novo exemplo
class Person {
    #name = '';
    constructor(initialName) {
        this.#name = initialName;
    }
    setName(name) {
        this.#name = name;
    }
    getName() {
        return this.#name;
    }
}
////////////////////////////////////////////////
console.log(p);
// Person()
p.getName();
// 'Guilherme'
p.name;
// undefined
p.setName('Thiago');
p.getName();
//'Thiago'