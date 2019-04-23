const express = require('express')
const knex = require('knex')(require('./knexfile'))
const crypto = require('crypto')

const router = express.Router()

function generateSalt () {
  return crypto.randomBytes(16).toString('base64')
}

function generateHash (password, salt) {
  var hash = crypto.createHmac('sha512', salt);
  hash.update(password);
  return hash.digest('base64');
}

router.get('/questions', async (req, res) => {
  try {
    const questions = await knex.select().table('questions')
    res.json(questions)
  } catch (err) {
    res.status(500)
  }
})

router.post('/questions', async (req, res) => {
  const { text } = req.body
  console.log(text)
  try {
    const question = await knex('questions').insert({ text }, '*')
    res.json(question)
  } catch (err) {
    res.status(text ? 500 : 400)
  }
})

router.post('/users', async(req, res) => {
  try {
    const salt = generateSalt()
    const hash = generateHash(req.body.password, salt)
    const data = {name: req.body.name, salt: salt, hash: hash}
    const user = await knex('users').insert(data, '*')
    res.json(user)
  } catch (err) {
    res.status(500)
  }
})

router.post('/login', async(req, res) => {
  try {
    const user = await knex('users').where({
      name: req.body.name
    }).first().then((row) => row)

    if (user.hash !== generateHash(req.body.password, user.salt)){
      return res.status(401).end("access denied");
    }

    res.json({msg: "User " + req.body.name + " has been signed in.", user: req.body.name, loggedIn: true})
  } catch (err) {
    res.status(500)
  }
})

module.exports = router
