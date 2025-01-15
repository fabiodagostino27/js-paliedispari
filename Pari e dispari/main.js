let userChoice = parseInt(prompt("Inserisci 0 se scommetti su pari e 1 se scommetti su dispari."));
let userNum = parseInt(prompt("Ora scegli un numero da 1 a 5."));
let pcNum;
let min = 1;
let max = 5;

function randomNum(x, y) {
    pcNum = Math.floor(Math.random() * y) + x;

    return pcNum
}
