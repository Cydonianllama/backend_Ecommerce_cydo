const express = require('express')
const app = express()
const cors  = require('cors')
const session = require('./network/session')
const passport = require('./network/passport')

const PORT = process.env.PORT || 5000

// globals with this
require('dotenv').config()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended : true}))

//session(app)
//passport(app)

const methoOverride = require('method-override')
app.use(methoOverride('X-HTTP-Method-Override'))

// the routes of my API and my app
//const router = require('./network/routes')
//router(app) 

// allow static routes 
const staticFiles = require('./network/static')
staticFiles(express,app)

app.get('/',(req,res)=>{
    res.sendFile(path.resolve('dist','index.html'))
})

app.listen(PORT,(err)=>{
    if (err) console.log(err)
    else console.log('success')
})