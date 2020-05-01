// filter filtra um array Ex:
// filter([ uva, maça,pepino,batata ] isfruts) => [uva,maça]

const pets =[
    {
        name: 'rex',
        tipo: 'Dog',
        age :  10
    },
    {
        name: 'miau',
        tipo: 'cat',
        age :  3
    },
    {
        name: 'dule',
        tipo: 'fish',
        age :  3
    }
]

const newPets = pets.filter((pet) => {
    return pet.age < 5
})


console.log(pets)
console.log(newPets)
