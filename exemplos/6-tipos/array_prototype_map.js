// map faz um transfomação nos dados EX:
// map([vaca, milho, galinha, batata], cook) => [ hambuger, fritas, coxinha, pipoca]

const pets =[
    {
        name: 'rex',
        type: 'Dog',
        age :  10,
        weight: 0.01
    },
    {
        name: 'miau',
        type: 'cat',
        age :  3,
        weight: 0.01
    },
    {
        name: 'dule',
        type: 'fish',
        age :  3,
        weight: 0.01
    },
    {
        name: 'pé de pano',
        type: 'horse',
        age :  1,
        weight: 0.01
    }
]


//Exmplo map
/***const mapPetsNames = pets.map((pet) => {
    return pet.name
})

console.log(petsNames)*/

//Comparando com forEach
const forEachPetNames =[]

pets.forEach((pet)=> {
    return forEachPetNames.push(pet.name)
})

console.log(forEachPetNames)