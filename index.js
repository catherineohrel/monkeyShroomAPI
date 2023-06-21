const express = require("express");

const port = 4242;

const app = express();

const data = [
    {
        "id": 1,
        "name": "Bananes",
        "namePrix":"Bananes - 25 mushs",
        "prix": 25,
        "image": "assets/bananes1.png"
    },
    {
        "id": 2,
        "name": "Chou Kale",
        "namePrix":"Chou Kale - 25 mushs",
        "prix": 25,
        "image": "assets/chouxKale1.png"
    },
    {
        "id": 3,
        "name": "Poupee Gonflable",
        "namePrix":"Poupee Gonflable - 100 mushs",
        "prix": 100,
        "image": "assets/poupee1.png"
    },
    {
        "id": 4,
        "name": "Anti Puces",
        "namePrix":"Anti Puces - 75 mushs",
        "prix": 75,
        "image": "assets/antiPuces1.png"
    },
    {
        "id": 5,
        "name": "Kit Reparation",
        "namePrix":"Kit Reparation - 150 mushs",
        "prix": 150,
        "image": "assets/kitLianes1.png"
    },
    {
        "id": 6,
        "name": "Gratte Dos",
        "namePrix":"Gratte Dos - 50 mushs",
        "prix": 50,
        "image": "assets/gratteDos1.png"
    },
    {
        "id": 7,
        "name": "Slip Surprise",
        "namePrix":"Slip Surprise - 50 mushs",
        "prix": 50,
        "image": "assets/slips1.png"
    },
    {
        "id": 8,
        "name": "Vies",
        "namePrix":"Vies - 100 mushs",
        "prix": 100,
        "image": "assets/Vies1.png"
    },
    {
        "id": 9,
        "name": "Surprise",
        "namePrix":"Surprise - 75 mushs",
        "prix": 75,
        "image": "assets/pochetteSurprise1.png"
    },
    {
        "id": 10,
        "name": "Champis",
        "namePrix":"Champis - 200 mushs",
        "prix": 200,
        "image": "assets/mushroom1.png"
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