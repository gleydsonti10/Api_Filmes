const express =  require('express');
const server = express();
const filmes = require('./src/data/filmes.json')


server.get('/', (req, res)=>{

    return res.json({mensagem: filmes})
})


server.listen(3000, ()=>{
    console.log("Servidor no ar!")
})