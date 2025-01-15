let userChoice = parseInt(prompt("Inserisci 0 se scommetti su pari e 1 se scommetti su dispari."));
if (userChoice == 0) {
    console.log("Hai scommesso su pari.")
} else if (userChoice == 1) {
    console.log("Hai scommesso su dispari.")
} else {
    alert("Dato non valido, ricarica la pagina!")
}

let userNum = parseInt(prompt("Ora scegli un numero da 1 a 5."));
console.log(`Il tuo numero è ${userNum}.`)

function randomNum(min, max) {
    let pcNum = Math.floor(Math.random() * max) + min;

    return pcNum
}

pcNum = randomNum(1, 5);
console.log(`Il numero del pc è ${pcNum}.`)

function evenOrOdd(num1, num2, x) {
    let sum = num1 + num2

    if (sum % 2 === 0 && x == 0) {
        return console.log(`La somma dei numeri ${num1} e ${num2} è pari. Hai vinto!`)
    } else if (sum % 2 !== 0 && x == 0) {
        return console.log(`La somma dei numeri ${num1} e ${num2} è dispari. Hai perso!`)
    } else if (sum % 2 === 0 && x == 1) {
        return console.log(`La somma dei numeri ${num1} e ${num2} è pari. Hai perso!`)
    } else if (sum % 2 !== 0 && x == 1){
        return console.log(`La somma dei numeri ${num1} e ${num2} è dispari. Hai vinto!`)
    } else {
        return console.log("Qualcosa è andato storto! :(")
    }
}

evenOrOdd(userNum, pcNum, userChoice)

