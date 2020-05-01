// simplificação do prototipe
class Animal {
    constructor(qtdepatas){
        this.qtdepatas = 4;
    }
}
class Cachorro extends Animal{
    constructor(morde){
        super(4);
        this.morde = 4;
    }
}
const pug = new Cachorro(false);
console.log(pug);
//Cachorro { qtdepatas: 4, morde: 4 }

//Outro exemplo de class
class Animal {
    constructor(){
        this.qtdepatas = 0;
    }
    movimentar(){}
}
class Cachorro extends Animal {
    constructor(morde){
        super();
        this.qtdepatas = 4;
        this.morde =morde;

    }
    latir(){
        console.log('Au! au!');
    }
}
const pug = new Cachorro(false);
const pitbull = new Cachorro(true);
console.log(pug);
console.log(pitbull);
//Cachorro { qtdepatas: 4, morde: false }
//Cachorro { qtdepatas: 4, morde: true }