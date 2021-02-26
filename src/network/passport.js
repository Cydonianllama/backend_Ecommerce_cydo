const passport = require('./passport_main')
const localStrategy = require('passport-local').Strategy
const cookieP = require('cookie-parser')

const User = require('../models/user')

//configuration strategies authentication
passport.use(new localStrategy(

    async (username, password, done) => {
        try{
            await User.find({ username, password },(err,docs)=>{
                if (err) done(err)
                docs.lenght === 0 ? done(null) : done(null, docs[0])
            })
        }catch(err){
            done(err)
        }
    }

))

passport.serializeUser(function (user, done) {
    done(null,user.idUser)
})

passport.deserializeUser(async function (id, done) {

    try{
        await User.find({ idUser: id },(err,docs)=>{
            if (err) done(err)
            docs.lenght === 0 ? done(null) : done(null, docs[0])
        })
        
    }catch(err){
        done(err)
    }
    
})

const modulePassport = (app) => {

    app.use(cookieP(process.env.SECRET))

    //passport middlewares
    app.use(passport.initialize())
    app.use(passport.session())

}

module.exports = modulePassport,{passport};