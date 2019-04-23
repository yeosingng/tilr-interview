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
  console.log(req.body)
  try {
    const question = await knex('questions').insert({ text }, '*')
    res.json(question)
  } catch (err) {
    res.status(text ? 500 : 400)
  }
})

router.post('/users', async(req, res) => {
  const { user } = req.body
  console.log(req.body)
  try {
    const user = await knex('users').insert({ user }, '*')
    res.json('success')
  } catch (err) {
    res.status(500)
  }
})

module.exports = router
