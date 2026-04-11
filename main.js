// snack 1

/*function somma(a, b) {
    return a + b;
}

*/


/*const somma = function (a,b) { return(a + b) }

let risultato = somma(2,3)*/

/*const somma = (a, b) => (a + b)

let risultato = somma(2, 4)*/

//snack 2

/*const squared = (number) => (number * number);

let risultato = squared(9);

console.log(risultato) ;*/

//snack 3

/*const sottrazione = (a, b) => (b - a);

function eseguiOperazione(a, b, operazione) {
    if (b > a) {
        return operazione(a, b)
    } else {
        console.log("non vogliamo numeri negativi")
    }

}

let risultato = eseguiOperazione(6, 10, sottrazione);

console.log("Il risultato è ", risultato)*/


/*Snack 4
Crea un generatore di funzioni creaTimer
Scrivi una funzione creaTimer che accetta un tempo (in ms) e restituisce una nuova funzione che avvia un setTimeout per stampare "Tempo scaduto!".*/

/*function tempoScaduto() {
    console.log("Tempo scaduto");
};



function creaTimer(tempo, callback) {
    return function () {
        setTimeout(callback, tempo)
    }
};

const timer1 = creaTimer(5000, tempoScaduto);

timer1();*/



/*🏆 Snack 5
Crea una funzione stampaOgniSecondo con setInterval.
Definisci una funzione che accetta un messaggio e lo stampa ogni secondo.

Nota: Questa funzione creerà un loop infinito. Interrompilo manualmente o usa clearInterval() in un altro script.*/

/*function stampaOgniSecondo() {

    let contatore = 0

    let myInterval = setInterval(() => {
        contatore++
        console.log("messaggio", contatore);
    }, 1000);

    setTimeout(() => {
        clearInterval(myInterval)
    }, 5000);

}

stampaOgniSecondo();*/








/*🏆 Snack 6
Crea un contatore automatico con setInterval
Definisci una funzione creaContatoreAutomatico che accetta un intervallo di tempo e restituisce una funzione che avvia un setInterval, incrementando un contatore e stampandolo.*/

/*function creaContatoreAutomatico(intervallo, durata) {

    let contatore = 0

    let myInterval = setInterval(() => {
        contatore++;
        console.log(contatore);
    }, intervallo);

    setTimeout(() => {
        clearInterval(myInterval)
    }, durata);

}

let contatore1 = creaContatoreAutomatico(2000, 10000);*/



/*🏆 Snack 7
Crea una funzione che ferma un timer dopo un certo tempo
Scrivi una funzione eseguiEferma che accetta un messaggio, un tempo di avvio e un tempo di stop. Il messaggio deve essere stampato a intervalli regolari, ma si deve fermare dopo il tempo di stop.*/

function creaContatoreAutomatico(messaggio, intervallo, durata) {

    let contatore = 0

    let myInterval = setInterval(() => {
        contatore++;
        console.log(messaggio, contatore);
    }, intervallo);

    setTimeout(() => {
        clearInterval(myInterval)
    }, durata);

}

let dueSecondi = creaContatoreAutomatico("Ciao Front-end", 1000, 10000);