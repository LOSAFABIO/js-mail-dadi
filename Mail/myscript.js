/*
Mail
Chiedi all’utente la sua email,
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del controllo.
*/

let email = prompt(`Email utente`);   // Richiesta email

let listaEmail = []; // Lista email

listaEmail.push(`ciao@gmail.com`);
listaEmail.push(`amico@gmail.com`);
listaEmail.push(`fabio@gmail.com`);
listaEmail.push(`losa@gmail.com`);
listaEmail.push(`buongiorno@gmail.com`);

let emailControl = false

for (i = 0 ; i < listaEmail.length ; i++){ // Ciclo ugualianza email con lista
    if (email == listaEmail[i]){  
        emailControl = true;
    }
}

if(emailControl){   // Stampa messaggio 
    document.writeln(`L'email inserita è presente nella lista.`);
}else{
    document.writeln(`L'email inserita non è presente nella lista.`) ;
}

