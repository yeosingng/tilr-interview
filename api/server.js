const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const routes = require('./routes')
const cors = require('cors')
const session = require('express-session')

const app = express()
app.use(morgan('combined'))
app.use(cors())
app.use(bodyParser.json())
app.use(routes)

app.use(session({
    secret: 'redfox',
    resave: false,
    saveUninitialized: true,
}))

app.use(function(req, res, next){
    req.user = ('user' in req.session) ? req.session.user : null;
    next();
});

const server = app.listen(8000, () => {
  console.log('Server running on 8000!')
})

module.exports = server
