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

const sottrazione = (a, b) => (b - a);

function eseguiOperazione(a, b, operazione) {
    if (b > a) {
        return operazione(a, b)
    } else {
        console.log("non vogliamo numeri negativi")
    }

}

let risultato = eseguiOperazione(6, 10, sottrazione);

console.log("Il risultato è ", risultato)

