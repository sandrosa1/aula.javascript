// trata todo o array e retorna um resultado
const pets =[
    {
        name: 'rex',
        type: 'Dog',
        age :  10,
        weight: 5
    },
    {
        name: 'miau',
        type: 'cat',
        age :  3,
        weight: 2
    },
    {
        name: 'dule',
        type: 'fish',
        age :  3,
        weight: 1
    },
    {
        name: 'pé de pano',
        type: 'horse',
        age :  1,
        weight: 10
    }
]
// encadeando tudo

const totalWeightDogs = pets.filter((pet) => {
    return pet.type === 'dog'
}).reduce((total, pet) => {
    return total + pet.weight
}, 0)

console.log(totalWeightDogs)






// exemplo retornado o peso
/***
const totalWeitght = pets.reduce((total, pet) => {
    return total + pet.weight

},0)
console.log(totalWeitght)
 */


//Somando idade e peso
/**
const totalWeitght = pets.reduce((total, pet) => {
    return {
        totalAge:total.totalAge + pet.age,
        totalWeight:total.totalWeight + pet.weight
    }

},{ totalAge: 0, totalWeight: 0})

console.log(totalWeitght)
 */


//Substituindo filter e map  com reduce
// const totalWeitght = pets.reduce((total, pet) => {
//     if (pet.type !== 'dog') return total

//     return total + pet.weight
// }, 0)

// console.log(totalWeitght)



// const dogs = pets.filter((pet) => {
//     return total + pet.weight
// },0)
// console.log(dogs)


// const totalWeight = pets.reduce((total, pet) => {
//     return total + pet.weight
// })

// console.log(totalWeight)




