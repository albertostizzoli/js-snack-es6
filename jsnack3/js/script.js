// Creo array di oggetti contenente le caratteristiche delle varie bici
const listaBici = [
    {
        nome: 'Bianchi',
        peso: 14
    },
    {
        nome: 'Cannondale',
        peso: 10
    },
    {
        nome: 'Santa Cruz',
        peso: 15
    },
    {
        nome: 'Megamo',
        peso: 8
    },
    {
        nome: 'DinoBikes',
        peso: 7
    },

];

console.log(listaBici);

//Con un forEach e un filter trovo la bici che pesa di meno nella lista

const lowerBike = [];
listaBici.forEach((element, index)=> {
    const {peso} = listaBici[index];
    lowerBike.push(peso);
})
const newBike = listaBici.filter((element)=>{
    return element.nome && element.peso === Math.min(...lowerBike);
});

// Stampo in console la bici che pesa di meno
console.log(`La bici che pesa di meno è: ${newBike[0].nome} e pesa ${newBike[0].peso}kg`);

