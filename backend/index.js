// root file
const express = require('express');
const app = express();
let port = 3500;

app.use(express.json()); //middleware

app.get('/', (req, res) => {
    res.send('hello');
});

app.post('/login', (req, res) => {
    const data = req.body;
    console.log(data);
    res.status(255).send('data revieved');
});

app.listen(port, () => {
    console.log('server is running');
});