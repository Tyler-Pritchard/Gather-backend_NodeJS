exports.seed = function (knex, Promise) {
  return knex('orders')
    .del()
    .then(() => {
      return knex('orders').insert([{
          user_id: 1,
          total: 1000,
          tax: 0100,
          tips: 0100
        },
        {
          user_id: 2,
          total: 2000,
          tax: 0200,
          tips: 0200
        },
        {
          user_id: 3,
          total: 3000,
          tax: 0300,
          tips: 0300
        }
      ])
    })
}