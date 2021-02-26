const user = require('../API/user/network')
const product = require('../API/product/network')
const advice = require('../API/advice/network') 
const purchase = require('../API/purchase/network')
const seller = require('../API/seller/network')

const routes = (app) => {

    app.use('/api/user',user)
    app.use('/api/product',product)
    app.use('/api/advice', advice)
    app.use('/api/purchase', purchase)
    app.use('/api/seller', seller)
    
}

module.exports = routes;