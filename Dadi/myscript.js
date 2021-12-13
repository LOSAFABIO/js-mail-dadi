/*
Gioco dei dadi
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.
Prima di partire a scrivere codice poniamoci qualche domanda:
Che ci sia un array da qualche parte?
Se dobbiamo confrontare qualcosa che “cosa” ci serve?
*/

let player = Math.floor(Math.random() * 6 + 1) + Math.floor(Math.random() * 6 + 1); // Lancio dadi giocatore
console.log(player);

let computer = Math.floor(Math.random() * 6 + 1) + Math.floor(Math.random() * 6 + 1); // Lancio dadi computer
console.log(computer);

if (player > computer){ // Esito vincente
    document.writeln(`HAI VINTO!`);
} else if (computer > player){ // Esito perdente
    document.writeln(`HAI PERSO!`);
} else { // Pareggio
    document.writeln(`HAI PAREGGIATO!`);
}

