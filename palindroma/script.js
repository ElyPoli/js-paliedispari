/*
Palidroma:
- Chiedere all’utente di inserire una parola
- Creare una funzione per capire se la parola inserita è palindroma (una parola che si legge allo stesso modo anche da destra versi sinistra, ad esempio anna, otto)
*/

// Dichiaro variabili
const userWordString = prompt("Inserisci una parola");
const userWordArray = userWordString.split(""); // Trasformo la stringa in un array dividendo ogni lettera
let palindromaQuestion;

console.log("La stringa inserita dall'utente: " + userWordString);
console.log("Trasformato in un array: " + userWordArray);

// Invoco la funzione per stabili se la parola inserita è palindroma
palindromaQuestion = palindroma(userWordArray);

console.log("La parola è palindroma? " + palindromaQuestion);

// Funzione che stabilisce se una parola è palindroma
function palindroma(arrayWord) {

    let palindromaWord = true;
    const arrayBackwards = [];
    let z = 0;
    let arrayWordLength = arrayWord.length - 1; // Per farlo iniziare a contare da 0

    // Scorro sull'array al contrario e lo copio in un altro
    for (let i = arrayWordLength; i >= 0; i--) {

        arrayBackwards[z] = arrayWord[i];

        z++;
    }

    console.log("Questo è l'array originale: " + arrayWord);
    console.log("Questo è l'array al contrario: " + arrayBackwards);

    // Scorro su entrambi gli array per confrontarli - fino a che non trovo una lettera diversa o finisce l'array
    let i = 0;
    do {
        if (arrayWord[i] != arrayBackwards[i]) {
            palindromaWord = false;
        } 

        i++;
    } while (palindromaWord === true && i < arrayWordLength);

    return palindromaWord;
}