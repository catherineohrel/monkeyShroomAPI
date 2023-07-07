const express = require("express");
const cors = require("cors");
const port = 4242;

const app = express();
app.use(cors("*"));
app.use(express.static('assets'));

const data = [
    {
        "id": 1,
        "name": "Bananes",
        "namePrice":"Bananes - 25 mushs",
        "price": 25,
        "image": "/bananes1.png",
        "shipping": "Immediat"
    },
    {
        "id": 2,
        "name": "Chou Kale",
        "namePrice":"Chou Kale - 25 mushs",
        "price": 25,
        "image": "/chouxKale1.png",
        "shipping": "2 jours ouvres"
    },
    {
        "id": 3,
        "name": "Poupee Gonflable",
        "namePrice":"Poupee Gonflable - 100 mushs",
        "price": 100,
        "image": "/poupee1.png",
        "shipping": "2 jours ouvres"
    },
    {
        "id": 4,
        "name": "Anti Puces",
        "namePrice":"Anti Puces - 75 mushs",
        "price": 75,
        "image": "/antiPuces1.png",
        "shipping": "Moins de 24h"
    },
    {
        "id": 5,
        "name": "Kit Reparation",
        "namePrice":"Kit Reparation - 150 mushs",
        "price": 150,
        "image": "/kitLianes1.png",
        "shipping": "Moins de 24h"
    },
    {
        "id": 6,
        "name": "Gratte Dos",
        "namePrice":"Gratte Dos - 50 mushs",
        "price": 50,
        "image": "/gratteDos1.png",
        "shipping": "Moins de 24h"
    },
    {
        "id": 7,
        "name": "Slip Surprise",
        "namePrice":"Slip Surprise - 50 mushs",
        "price": 50,
        "image": "/slips1.png",
        "shipping": "2 jours ouvres"
    },
    {
        "id": 8,
        "name": "Vies",
        "namePrice":"Vies - 100 mushs",
        "price": 100,
        "image": "/vies1.png",
        "shipping": "Immediat"
    },
    {
        "id": 9,
        "name": "Surprise",
        "namePrice":"Surprise - 75 mushs",
        "price": 75,
        "image": "/surprise1.png",
        "shipping": "2 jours ouvres"
    },
    {
        "id": 10,
        "name": "Champis",
        "namePrice":"Champis - 200 mushs",
        "price": 200,
        "image": "/mushroom1.png",
        "shipping": "2 jours ouvres"
    }
]

app.get("/", (req, res) => {
    res.send('je suis dans la route"/"');
});

app.get("/storedata", (req, res) => {
    res.json(data)
});


app.listen(port, () => (
    console.log(`http://localhost:${port}`)
));