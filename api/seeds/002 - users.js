exports.seed = async (knex) => {
  await knex.batchInsert('users', [
    { name: 'Tom', salt: '0OJQmmh5tnEWVHSl13KMJw==', hash: 'R252B1gLhr/CWsWRpfelS1qLnFFGmFKhseQe2TACP7D6MSf+sck3OQy3eGT6NJyL4x+xYFIoNxvYPREFxS+qHg=='},
    { name: 'bob', salt: 'xZ/RRLsBfeoeLrZaEnEQ2Q==', hash: 'q4+T+yKXlJcy2/4zbp/7r9HNgyitWXLIaWRG5DbhtoJrM4GMWHE4fhOnmtyqlVYtotQ1heaPW6m8io/akMePGQ=='},
    { name: 'jenny', salt: 'HCAkBEnPCnYikzY2ZZHCCw==', hash: 'T1FvhIXimhlJOrv6iIH9zbdro5nk3A7tc1lxJvkBZ0hqLQVFyinT8/EGehT+p5Gm7IesGZtEMj1mBtuUJkIKXQ=='},
    { name: 'tiff', salt: '/pOZUBoThYSNalxyJQNWXA==', hash: '8XsNrX6Jv6DS750GClqCTBCkh6QMFwaePkkDMK/ZcXNVsK2O1S0jinmq+1LRKwUbrc7sQDKaJYy/oLuozHT3eQ=='},
    { name: 'ricardo', salt: 'EIn3ybE8jHeotTwK80wmtg==', hash: 'ZVf8P/SrFW0BjJEpeTipnFp+yRXCSu7/gEBzbg7zQk6G9GdRqLkb+h1FTgZhilyyoSgB0TRjZm5PeRHrmilldQ=='}
  ])
}
