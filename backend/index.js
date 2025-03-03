// root file
const express = require('express');
const app = express();
let port = 3500;
const cors = require('cors');
// const routes = require('./routes');

app.use(express.json()); //middleware
app.use(cors()); //middleware
// app.use(routes());

const mydata = [];

app.get('/', (req, res) => {
    res.send('hello');
});

app.post('/login', (req, res) => {
    console.log(req.body);
    mydata.push(req.body);
    console.log('updated data is: ', mydata);
    res.status(200).json({ message: "user logged in successfulll" });
});

app.listen(port, () => {
    console.log('server is running');
});