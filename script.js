console.log('hello');

const part1 = ['you will ', 'you have ', 'you might ', 'you will not ', 'you will never ', 'you did '];
const part2 = ['eat a ', 'drink a ', 'order a ', 'cook a ', 'buy a ', 'fight a '];
const part3 = ['pizza.', 'cola.', 'airfryer.', 'chicken wings.', 'zinger burger.', 'fries.'];

function randGen(num) {
    return Math.floor(Math.random() * num);
}

console.log(part1[randGen(6)] + part2[randGen(6)] + part3[randGen(6)])