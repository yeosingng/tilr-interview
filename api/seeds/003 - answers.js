exports.seed = async (knex) => {
  await knex.batchInsert('answers', [
    { question_id: 1, user_id: 2, is_yes: true},
    { question_id: 1, user_id: 4, is_yes: true},
    { question_id: 1, user_id: 3, is_yes: false, comment: "We didn't do so well this year..."},
    { question_id: 2, user_id: 3, is_yes: false},
    { question_id: 2, user_id: 1, is_yes: true, comment: "Perfect pairing"},
    { question_id: 2, user_id: 2, is_yes: true, comment: "I love pineapple"},
    { question_id: 3, user_id: 1, is_yes: true, comment: "Beer anytime!"},
    { question_id: 3, user_id: 2, is_yes: false, comment: "I'm non-alcoholic"},
    { question_id: 3, user_id: 3, is_yes: false, comment: "I only drink soda"},
    { question_id: 3, user_id: 4, is_yes: false },
    { question_id: 4, user_id: 1, is_yes: true, comment: "Kawhi is gonna carry!"},
    { question_id: 4, user_id: 5, is_yes: true, comment: "Siakam is MIP"}
  ])
}
