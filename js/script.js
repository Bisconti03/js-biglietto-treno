//1. Il programma chiede quanti chilometri vuole percorrere l'utente
//2. Il programma chiede quanti anni ha l'utente 
//3. Da queste informazioni calcola il prezzo totale del viaggio seguendo ====> (0.21€ * km )
//4. Se l'utente ha un'età <= a 18 anni avrà uno sconto sul biglietto del 20%
//5. Se l'utente ha un'età >= a 65 anni avrà uno sconto del 40%
//6. Il programma mostrerà il prezzo finale del biglietto con o senza sconti aggiunti






const distanzaDaPercorrere = prompt ("Quanti chilometri vuoi percorrere?" );

const età = prompt ("Quanti anni hai?");

let prezzoAlChilometro = 0.21;

const prezzoBigliettoNormale = prezzoAlChilometro * distanzaDaPercorrere;


const finalDisplay = "Il prezzo finale del biglietto è"

let euro = "euro"

console.log("L'tente vorrebbe percorrere: " + distanzaDaPercorrere + " chilometri")
console.log("L'utente ha: " + età + " anni")
console.log("Il prezzo standard del biglietto senza sconto è: " + prezzoBigliettoNormale + euro)



if (età <= 18) {
    document.getElementById('prezzo').innerHTML = finalDisplay + ((prezzoBigliettoNormale / 100) * 80).toFixed(2) + euro;
}

else if (età >= 65) {
    document.getElementById('prezzo').innerHTML = finalDisplay + ((prezzoBigliettoNormale / 100) * 60).toFixed(2) + euro;
} 

else {
    document.getElementById('prezzo').innerHTML = finalDisplay + (prezzoBigliettoNormale) + euro;
}

