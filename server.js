const express = require('express')
const mysql = require('mysql')
const myconn = require('express-myconnection')
const cors = require ('cors')
const routes = require('./routes')
const routes2 = require('./routes2')

const app = express()
app.set('port', process.env.PORT || 9000)
const dboptions = {
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'Ulibarri170499!',
    database: 'escuela'
}

// midlewares
app.use(myconn(mysql, dboptions, 'single'))
app.use(express.json())
app.use(cors())
// routes 
app.get('/', (req, res)=>{
    res.send('Bienvenido')
})
app.use('/api', routes)
app.use('/api2', routes2)

// server running 
app.listen(app.get('port'), ()=> {
    console.log('server running on port', app.get('port'))
})

