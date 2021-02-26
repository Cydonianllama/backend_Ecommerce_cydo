const mongo = require('../utils/db')

const userSchema = new mongo.Schema({

    idUser : String,
    districID : String,
    provinceID :String,
    cityID : String,
    postalCodeID : String,
    paymentMethod1TypeID : String,
    paymentMethod2TypeID : String,

    DocumentIndentification : String,
    fullname : String,
    birthdate : Date,
    username : String,
    password :String,
    description : String,
    email : String,
    secretElection : String,
    responseElection : String,
    paymentMethod1codeORemail : String,
    paymentMethos1expirationDate : String,
    paymentMethod2codeORemail : String,
    paymentMethos2expirationDate : String,
    dateSuscription : Date,
    urlAvatar : String

},
{
    timestamps : true
})

const user = mongo.model("users",userSchema)

module.exports = user;