const user = {
    name: 'sandro',
    lastName: 'Amâncio de Sá'
};

function getUserWithFullName(user) {
    return {
        ...user,
        fullName:  '${user.name} ${user.lastName}' // era pra imprimir o nome completo?
    }
}

const userWithFullName = getUserWithFullName(user);

console.log(userWithFullName);