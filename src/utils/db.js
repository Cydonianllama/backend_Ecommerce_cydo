const mongoose = require('mongoose')

require('dotenv').config()

let DB = process.env.DB

console.log('db : ',DB)

mongoose
    .connect(DB,{useNewUrlParser : true , useUnifiedTopology : true})
    .then(()=>console.log('success conection DB'))
    .catch((err)=>console.log(err))

module.exports = mongoose;