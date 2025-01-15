let word = prompt("Scrivi una parola.");
let lowerWord = word.toLowerCase();

function verifyPal(x, y) {
    let reversedWord = y.split("").reverse().join("");

    if (reversedWord === y) {
        return console.log(`${x} è una parola palindroma.`)
    } else {
        return console.log(`${x} non è una parola palindroma.`)
    }
}

verifyPal(word, lowerWord)