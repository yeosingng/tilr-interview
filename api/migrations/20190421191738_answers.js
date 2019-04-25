exports.up = function (knex) {
  return knex.schema.createTable('answers', (table) => {
    table
      .integer('question_id')
      .references('question_id')
      .inTable('questions')
      .notNullable()
    table
      .integer('user_id')
      .references('user_id')
      .inTable('users')
      .notNullable()
    table
      .boolean('is_yes')
      .notNullable()
    table
      .unique(['question_id', 'user_id'])
  })
}

exports.down = function (knex) {
  return knex.schema.dropTableIfExists('answers')
}
