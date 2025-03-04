const express = require('express');
const app = express();
const cors = require('cors');
const port = 3500;

let mydata = []

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {    
    res.send('Hello World!');
});

app.post('/login', (req, res)=>{
    console.log(req.body);
    mydata.push(req.body);
    console.log(mydata);
    res.status(200).json({message:"data recieved", mydata});
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});