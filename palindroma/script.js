/*
Palidroma:
- Chiedere all’utente di inserire una parola
- Creare una funzione per capire se la parola inserita è palindroma (una parola che si legge allo stesso modo anche da destra versi sinistra, ad esempio anna, otto)
*/

// Dichiaro variabili
const userWordStringElement = document.querySelector(".user-word-string");
const btnStart = document.getElementById("btn-start");
const btnRetry = document.getElementById("btn-retry");

// Pulsante start
btnStart.addEventListener("click", function () {

    const questionResult = document.getElementById("question-result");
    const userWordString = userWordStringElement.value;
    let palindromaQuestion;

    // Controllo input utente
    if (isNaN(userWordString) != true) {
        alert("Si è verificato un errore");
        location.reload();
    }

    const userWordArray = userWordString.split(""); // Trasformo la stringa in un array dividendo ogni lettera

    // Invoco la funzione per stabilire se la parola inserita è palindroma
    palindromaQuestion = palindroma(userWordArray);

    questionResult.innerHTML =
        `
        <p>Hai inserito la parola <span class="text-uppercase fw-bold">${userWordString}</span> che <span class="text-uppercase fw-bold">${palindromaQuestion}</span></p>
    `;
})

// Funzione che stabilisce se una parola è palindroma
function palindroma(arrayWord) {

    let palindromaWord = "è palindroma";
    const arrayBackwards = [];
    let z = 0;
    let arrayWordLength = arrayWord.length - 1; // Per farlo iniziare a contare da 0

    // Scorro sull'array al contrario e lo copio in un altro
    for (let i = arrayWordLength; i >= 0; i--) {
        arrayBackwards[z] = arrayWord[i];
        z++;
    }

    // Scorro su entrambi gli array per confrontarli - fino a che non trovo una lettera diversa o finisce l'array
    let i = 0;
    do {
        if (arrayWord[i] != arrayBackwards[i]) {
            palindromaWord = "non è palindroma";
        }
        i++;
    } while (palindromaWord === "è palindroma" && i < arrayWordLength);

    return palindromaWord;
}

// Pulsante retry
btnRetry.addEventListener("click", function () {
    location.reload();
})