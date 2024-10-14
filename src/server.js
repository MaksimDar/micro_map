const express = require('express');
const { MongoClient } = require('mongodb');
const cors = require('cors');

const app = express();
const port = 3001;

const url = 'mongodb+srv://maxdovhusha:qLaqLSGh9YNMYBCY@mobispace.hesfl.mongodb.net/locations';
const dbName = 'maxdovhusha';

app.use(cors());
app.get('/locations', async (req, res) => {
    const client = new MongoClient(url);

    try {
        await client.connect();
        const db = client.db(dbName);
        const collection = db.collection('locations');

        const locations = await collection.find({}).toArray();
        res.json(locations);
    } catch (err) {
        res.status(500).send({ message: 'Error fetching locations' });
        console.error(err);
    } finally {
        await client.close();
    }
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
