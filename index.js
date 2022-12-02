const express = require('express')
const app = express()
const ObjectId = require("mongodb").ObjectId;

function getClient(){
    const { MongoClient, ServerApiVersion } = require('mongodb');
    const uri = "mongodb+srv://testUser1:lkOk2HtL0dhcCzFv@cluster0.djt6uol.mongodb.net/?retryWrites=true&w=majority";
    return new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
}

app.get('/students', (req, res) => {
    const client = getClient();
    client.connect(async err => {
        const collection = client.db("school_app").collection("students");
        // perform actions on the collection object
        const students = await collection.find().toArray()
        res.send(students)
        client.close();
    });
});
const bodyParser = require('body-parser');

app.post('/students', bodyParser.json(), (req, res) => {
    const newStudent = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        birthYear: req.body.birthYear,
        grades: []
    }
    const client = getClient();
    client.connect(async err => {
        const collection = client.db("school_app").collection("students");
    });
});

app.listen(3000);
