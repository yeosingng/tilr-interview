const express = require('express')
const knex = require('knex')(require('./knexfile'))
const crypto = require('crypto')
const session = require('express-session')

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
  try {
    const question = await knex('questions').insert({ text }, '*')
    res.json(question)
  } catch (err) {
    res.status(text ? 500 : 400)
  }
})

router.get('/questions/answers', async (req, res) => {
  try {
    const answers = await knex.select().table('answers')
    res.json(answers)
  } catch (err) {
    res.status(answer ? 500 : 400)
  }
})

router.put('/questions/answers', async (req, res) => {
  try {
    const body = req.body
    const question_id = body.question_id
    const user_id = body.user_id
    const is_yes = body.is_yes

    const answer = await knex.raw(
      "INSERT INTO answers(question_id, user_id, is_yes) values (?, ?, ?) ON CONFLICT (question_id, user_id) DO UPDATE SET is_yes=? WHERE answers.question_id=? AND answers.user_id=?;",
     [question_id, user_id, is_yes, is_yes, question_id, user_id]);

    const answers = await knex.select().table('answers')
    res.json(answers)
  } catch (err) {
    res.status(answer ? 500 : 400)
  }
})

router.put('/questions/answers/text', async (req, res) => {
  try {
    const body = req.body
    const question_id = body.question_id
    const user_id = body.user_id
    const answerText = body.answer_text

    const answer = await knex('answers').where({question_id : question_id, user_id: user_id})
                                        .update({comment: answerText})

    const answers = await knex.select().table('answers')
    res.json(answers)
  } catch (err) {
    res.status(500)
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
    console.log("should reach here")
    var user = await knex('users').where({
      name: req.body.name
    }).first().then((row) => row)

    if (user === undefined){
      console.log("here!")
      res.status(401).send("access denied");
    }

    if (user.hash !== generateHash(req.body.password, user.salt)){
      return res.status(401).end("access denied");
    }

    res.json({msg: "User " + req.body.name + " has been signed in.",
             user: req.body.name,
             user_id: user.user_id,
             loggedIn: true})
  } catch (err) {
    res.status(500)
  }
})

module.exports = router
