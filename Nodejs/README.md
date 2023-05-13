npm init ou npm i 
npm i express
npm i nodemon

node index.js
npx nodemon
-----------------------------------
const express = require('express')
const app = express()


app.listen(3333, ()=>{
    console.log('Servidor UP')
})
-----------------------------------
localhost:xxxx
127.0.0.1:xxxx
-----------------------------------
const express = require('express')
const app = express()

app.get('/', (req, res)=> {
    res.send('voce acionou a rota /')
})

app.get('/soma', (req, res)=> {
    res.send('voce acionou a rota /soma')
})

app.listen(3333, ()=>{
    console.log('Servidor UP')
})
-----------------------------------
app.use(express.urlencoded({extended:true}))
