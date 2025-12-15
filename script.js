/*
Snack 1
Creare un array di oggetti:
Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
Stampare a schermo la bici con peso minore.
*/
const listaProdotti = [
    { nome: "Bianchi Oltre XR4", peso: 7.2 },
    { nome: "Pinarello Dogma F12", peso: 6.8 },
    { nome: "Specialized Tarmac SL7", peso: 6.9 },
    { nome: "Trek Emonda SLR", peso: 6.7 },
    { nome: "Cannondale SuperSix EVO", peso: 7.0 },
    { nome: "Colnago V3Rs", peso: 6.9 }
];
/* Creo variabile per ricevere dato del ciclo for */
let lightestProduct = listaProdotti[0]; /* In questa variabile sto dicendo che il dato ricevuto sarà sempre il primo elemento dell'array */


/* CICLO FOR *//* in questo ciclo devo confrontare gli elementi dell'array e trovare il più leggero */
for (let index = 0; index < listaProdotti.length; index++)/* così scorro l'array */ {
    const prodotto = listaProdotti[index];/* salvo il dato di ogni ciclo in una variabile */
    console.log(prodotto.nome, prodotto.peso);
    if (prodotto.peso < lightestProduct.peso)/* Per identificare il più leggero devo confrontare il peso dell'elemento esaminato nell'array in quel momento, con quello di partenza che è sempre il primo dell'array */
    {
        /* ogni volta che troverà un elemento più leggero lo metterà in cima all'array */ 
        lightestProduct = prodotto
    };
};
    /* Ora so che il prodotto più leggero sarà sempre in cima all'array, se ci aggiungo .peso posso visualizzarlo in console */
console.log("Il prodotto più leggero è: ", lightestProduct);

/*
Snack2
Creare un array di oggetti di squadre di calcio.
Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
*/
const listaSquadre = [
    { NomeSquadra: "Milano", puntiFatti: 0, falliSubiti: 0 },
    { NomeSquadra: "Bologna", puntiFatti: 0, falliSubiti: 0 },
    { NomeSquadra: "Venezia", puntiFatti: 0, falliSubiti: 0 },
    { NomeSquadra: "Trento", puntiFatti: 0, falliSubiti: 0 },
    { NomeSquadra: "Tortona", puntiFatti: 0, falliSubiti: 0 },
    
    { NomeSquadra: "Trieste", puntiFatti: 0, falliSubiti: 0 },
    { NomeSquadra: "Treviso", puntiFatti: 0, falliSubiti: 0 },
    { NomeSquadra: "Napoli", puntiFatti: 0, falliSubiti: 0 },
    { NomeSquadra: "Sassari", puntiFatti: 0, falliSubiti: 0 },
    { NomeSquadra: "ReggioE", puntiFatti: 0, falliSubiti: 0 }
]

/* Generare numeri random al posto degli 0 nelle proprietà “punti” fatti e “falli subiti”. */
function randomNumberInRange(min, max) {
    const risultato = Math.floor(Math.random() * (max - min)) + min;
    return risultato 
};
/* Come faccio ad aggiornare le due proprietà con il risultato di questa funzione? */
//listaSquadre.puntiFatti = randomNumberInRange(1, 200);
//console.log(listaSquadre) SBAGLIATO! Mi serve un ciclo
for (let index = 0; index < listaSquadre.length; index++)/* Così scorro l'array */
    {
    listaSquadre[index].puntiFatti = randomNumberInRange(1, 200);
    listaSquadre[index].falliSubiti = randomNumberInRange(1, 200);
};
console.log(listaSquadre)

/* Infine, creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console. */ 

const nuovaLista = []

for (let index = 0; index < listaSquadre.length; index++)/* Così scorro l'array */
    {
    const teamName = listaSquadre[index].NomeSquadra
    const fouls = listaSquadre[index].falliSubiti
      
    console.log(teamName, fouls)

    nuovaLista.push({
        nomeSquadra: teamName,
        falliSubiti: fouls
    })
};
console.table(nuovaLista)


/*
BONUS 
 
Crea 10 oggetti che rappresentano una zucchina.
Dividi in due array separati le zucchine che misurano meno o più di 15cm.
Infine stampa separatamente quanto pesano i due gruppi di zucchine.
*/

