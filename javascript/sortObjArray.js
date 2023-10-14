// Sort My Animals (6 kyu)

function sortAnimal(animal) {

    if ( animal === null ) {
        return animal;
    } else if ( animal.length === 0 ) {
        return animal;
    }

    let animals = animal.slice();

    animals.sort( ( a, b ) => a.numberOfLegs - b.numberOfLegs );
    animals.sort( ( a, b ) => {
        if ( a.numberOfLegs === b.numberOfLegs ) {
            let nameA = a.name.toUpperCase();
            let nameB = b.name.toUpperCase();

            if ( nameA === nameB ) {
                return 0
            } else if ( nameA > nameB ) {
                return 1
            } else {
                return -1;
            }
        }
    });

    return animals;
}
const animals =
   [{ name: "Cat", numberOfLegs: 4 }, 
    { name: "Snake", numberOfLegs: 0 }, 
    { name: "Dog", numberOfLegs: 4 },
    { name: "Pig", numberOfLegs: 4 },
    { name: "Human", numberOfLegs: 2 },
    { name: "Bird", numberOfLegs: 2 }];

console.log(sortAnimal(animals));