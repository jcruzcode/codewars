// Pete, the baker (5 kyu)
function cakes(recipe, available) {
  const numOfCakes = [];
  const ingredients = Object.keys(recipe);
  let maxCakes;

  for (let ingred of ingredients) {
    if (!(ingred in available)) {
      return 0;
    }
  }

  for (let ingredient in recipe) {
    if (ingredient in available) {
      maxCakes = Math.floor(available[ingredient] / recipe[ingredient]);
      numOfCakes.push(maxCakes);
    }
  }

  return Math.min(...numOfCakes);
}

console.log(
  cakes(
    { flour: 500, sugar: 200, eggs: 1 },
    { flour: 1200, sugar: 1200, eggs: 5, milk: 200 }
  )
);
console.log(
  cakes(
    { apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100 },
    { sugar: 500, flour: 2000, milk: 2000 }
  )
);
