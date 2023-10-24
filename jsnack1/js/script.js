"use strict"
// creo un array che contiene la lista dei vip
const listVip = [
    'Brad Pitt',
    'Johnny Depp',
    'Lady Gaga',
    'Cristiano Ronaldo',
    'Gerogina Rodriguez',
    'Chiara Ferragni',
    'Fedez',
    'George Clooney',
    'Amal Clooney',
    'Maneskin',
];

// creo una funzione che mi crei la lista dei vip con nome e numero del posto al tavolo
const printList = listVip.map((name, index) => ({
    tableName: "VIP Table",
    guestName: name,
    place: index + 1,
}));

// stampo in console la lista degli ospiti in un formato specifico
console.log(printList);

