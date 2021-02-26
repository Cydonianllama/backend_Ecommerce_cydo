const express = require('express')
const router = express.Router()

const controller = require('./controllers')

router.get('/', controller.findAll)

router.get('/:id', controller.finOne)

router.post('/', controller.create)

router.put('/:id', controller.update)

router.delete('/:id', controller.delete)


module.exports = router