const express = require('express')
const knex = require('knex')(require('./knexfile'))

const router = express.Router()

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
    const data = req.body
    console.log(data)
    const user = await knex('users').insert(data, '*')
    res.json(question)
  } catch (err) {
    res.status(500)
  }
})

module.exports = router
