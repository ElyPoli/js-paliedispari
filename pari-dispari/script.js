/*
Pari e Dispari:
- L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
- Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
- Sommiamo i due numeri
- Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
- Dichiariamo chi ha vinto.
*/

// Dichiaro variabili
const choice = prompt("Scegli: pari o dispari?");
const numberUser = parseInt(prompt("Inserisci un numero da 1 a 5:"));
let numberPc = randomGenerator (5, 1); // Invoco la funzione che genera un numero casuale
let sum, result, winner;

console.log("Scelta utente: " + choice);
console.log("Numero utente: " + numberUser);
console.log("Numero pc: " + numberPc);

// Controllo input utente
if (isNaN(numberUser) || numberUser < 1 || numberUser > 5) {
    alert("Si è verificato un errore");
    location.reload();
}

// Somma dei due numeri
sum = numberUser + numberPc;

console.log("Somma dei due numeri " + sum);

result = evenOdd(sum); // Invoco la funzione che stabilisce se un numero è pari o dispari

console.log("Il numero è: " + result);

// Stabilisco chi ha vinto
if (result === choice) {
    winner = "utente";
} else {
    winner = "computer";
}

console.log("Il vincitore è: " + winner);

// Funzione che genera numeri random da 1 a 5
function randomGenerator (max, min) {
    randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;

    return randomNumber;
}

// Funzione che stabilisce se un numero è pari o dispari
function evenOdd (sumNumber) {
    let numberEvenOdd = "dispari";

    if (sumNumber % 2 === 0) {
        numberEvenOdd = "pari";
    }

    return numberEvenOdd;
}