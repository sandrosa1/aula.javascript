let user = {
    name: 'Sandro'
};
console.log(user);
// forma de acessar e Alterndao propriedadede um objeto
user.name = 'Outro nome 1';
console.log(user);
user['name']='Outro nome 2'
console.log(user);

const prop = 'name';
user[prop] = 'Outro nome 3';
console.log(user);

//Criandouma propriedade
user.lasteName = 'Amâncio de sá';
console.log(user);


//Deletando uma propriedade
delete user.name;
console.log(user);
