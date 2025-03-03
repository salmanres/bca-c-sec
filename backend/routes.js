const express = require('express'); //external routing
const routes = express.Router();

routes.get('/', (req, res)=>{
    res.send('home api dfdfdfd');
});

module.exports = routes;