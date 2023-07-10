/*
Pari e Dispari:
- L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
- Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
- Sommiamo i due numeri
- Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
- Dichiariamo chi ha vinto.
*/

// Dichiaro variabili
const choiceElement = document.querySelector(".choice");
const numberUserElement = document.querySelector(".number-user");
const btnStart = document.getElementById("btn-start");
const btnRetry = document.getElementById("btn-retry");

// Pulsante start
btnStart.addEventListener("click", function () {
    
    const questionResult = document.getElementById("question-result");
    const choice = choiceElement.value;
    const numberUser = parseInt(numberUserElement.value);
    let numberPc = randomGenerator(5, 1); // Invoco la funzione che genera un numero casuale
    let sum, result, winner;

    // Controllo input utente
    if (isNaN(numberUser) || numberUser < 1 || numberUser > 5) {
        alert("Si è verificato un errore");
        location.reload();
    }

    // Somma dei due numeri
    sum = numberUser + numberPc;
    result = evenOdd(sum); // Invoco la funzione che stabilisce se un numero è pari o dispari

    // Stabilisco chi ha vinto
    if (result === choice) {
        winner = "utente";
    } else {
        winner = "computer";
    }

    questionResult.innerHTML = 
    `
        <p>Hai selezionato <span class="text-uppercase fw-bold">${choice}</span></p>
        <p>Hai inserito il numero <span class="text-uppercase fw-bold">${numberUser}</span></p>
        <p>Il computer ha estratto il numero <span class="text-uppercase fw-bold">${numberPc}</span></p>
        <p>La somma dei due numeri da <span class="text-uppercase fw-bold">${sum}</span> un numero <span class="text-uppercase fw-bold">${result}</span></p>
        <p class="fs-4">Il vincitore è: <span class="text-uppercase fw-bold">${winner}</span></p>
    `;
})

// Funzione che genera numeri random da 1 a 5
function randomGenerator(max, min) {
    randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;

    return randomNumber;
}

// Funzione che stabilisce se un numero è pari o dispari
function evenOdd(sumNumber) {
    let numberEvenOdd = "dispari";

    if (sumNumber % 2 === 0) {
        numberEvenOdd = "pari";
    }

    return numberEvenOdd;
}

// Pulsante retry
btnRetry.addEventListener("click", function () {
    location.reload();
})