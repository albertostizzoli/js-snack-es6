// Creo array di oggetti contenente le caratteristiche delle varie bici
const listaBici = [
    {
        nome: 'Bianchi',
        peso: 15
    },
    {
        nome: 'Cannondale',
        peso: 18
    },
    {
        nome: 'Santa Cruz',
        peso: 10
    },
    {
        nome: 'Megamo',
        peso: 7
    },
    {
        nome: 'DinoBikes',
        peso: 9
    },
];

console.log(listaBici);

// Con un forEach e un filter trovo la bici con il peso minore all'interno della lista
const pesoMinore = [];
listaBici.forEach((element, index)=> {
    const {peso} = listaBici[index];
    pesoMinore.push(peso);
})
const lowerBike = listaBici.filter((element)=>{
    return element.nome && element.peso === Math.min(...min);
});

// Infine stampo in console la bici che pesa di meno
console.log(`La bici che pesa di meno è: ${lowerBike[0].nome} e pesa ${lowerBike[0].peso}kg`);

