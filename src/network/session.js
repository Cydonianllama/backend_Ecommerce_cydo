var session = require('express-session');
var MongoDBStore = require('connect-mongodb-session')(session);

require('dotenv').config()

const DB = process.env.DB
const secret = process.env.SECRET

var store = new MongoDBStore({
    uri: DB,
    collection: 'mySessions'
});

// Catch errors
store.on('error', function (error) {
    console.log('error',error,DB);
});

const moduleSession = (app) => {

    app.use(require('express-session')({
        secret,
        cookie: {
            maxAge: 1000 * 60 * 60 * 24 * 7 // 1 week
        },
        store: store,
        resave: true,
        saveUninitialized: true
    }));

}

module.exports = moduleSession;