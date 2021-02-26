const express = require('express')
const router = express.Router()

const controller = require('./controllers')
const passport = require('../../network/passport_main')

router.post('/login?:username?:password', passport.authenticate('local', { failureRedirect: '/login' }), function (req, res) {
    res.send({data : req.user});
})

router.post('/logout' , (req,res)=>{
    if(req.isAuthenticated())  req.logOut()
    res.redirect('/salir')
})

router.get('/session',(req,res)=>{
    if (req.user) res.send(req.user)
    console.log('no hay session')
    res.status(200).send({ type: 'error', msg: 'no session'})
})

router.get('/',controller.findAll)

router.get('/:id',controller.finOne)

router.post('/',controller.create)

router.put('/:id',controller.update)

router.delete('/:id',controller.delete)


module.exports = router;

