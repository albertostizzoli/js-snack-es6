// Creo un array che rappresenta le squadre
const team = [
    {
        name: 'Inter',
        points: 0,
        fault: 0
    },
    {
        name: 'Juventus',
        points: 0,
        fault: 0
    },
    {
        name: 'Milan',
        points: 0,
        fault: 0
    },
    {
        name: 'Roma',
        points: 0,
        fault: 0
    },
    {
        name: 'Napoli',
        points: 0,
        fault: 0
    },
    {
        name: 'Lazio',
        points: 0,
        fault: 0
    },
];

// Creo un nuovo array
let newArray = [];

//Con un ciclo For e con la funzione Random Number genero i punti e i falli subiti
for (let i = 0; i < team.length; i++) {
    
    team[i].points = randomNumber(1,10);
    console.log(`I punti fatti da ${team[i].name} sono ${team[i].points}`);
    

    team[i].fault = randomNumber(1,10);
    console.log(`I falli subiti da ${team[i].name} sono ${team[i].fault}`);
    
    let {name, fault} = team[i];
    newArray[i] = {name, fault};
}

//Stampo in console il nuovo array
console.log(newArray);

//Funzione Numero Randomico
function randomNumber (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}