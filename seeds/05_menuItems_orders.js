
exports.seed = function(knex, Promise) {
    // Deletes ALL existing entries
    return knex('menuItems_orders')
      .del()
      .then(() => {
        // Inserts seed entries
        return knex('menuItems_orders').insert([
          {
            menuItems_id: 1,
            order_id: 1,
            quantity: 1
          },
          {
            menuItems_id: 2,
            order_id: 2,
            quantity: 2
          },
          {
            menuItems_id: 3,
            order_id: 3,
            quantity: 3
          }
        ])
      })
  }
  