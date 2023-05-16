// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];
// Assigns initial array to 'cats'

function destructivelyAppendCat(catName) {
    cats.push(catName);
}

function destructivelyPrependCat(catName) {
    cats.unshift(catName);
}

function destructivelyRemoveLastCat() {
    cats.pop();
}

function destructivelyRemoveFirstCat()  {
    cats.shift();
}

function appendCat(catName) {
    const catsCopy = [...cats];
    catsCopy.push(catName);
    return catsCopy;
}

function prependCat(catName) {
    const catsCopy = [...cats];
    catsCopy.unshift(catName);
    return catsCopy;
}

function removeLastCat() {
    const catsCopy = [...cats];
    catsCopy.pop();
    return catsCopy;
}

function removeFirstCat() {
    const catsCopy = [...cats];
    catsCopy.shift();
    return catsCopy;
}