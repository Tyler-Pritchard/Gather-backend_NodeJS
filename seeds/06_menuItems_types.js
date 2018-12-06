
exports.seed = function(knex, Promise) {
    // Deletes ALL existing entries
    return knex('menuItems_types')
      .del()
      .then(() => {
        // Inserts seed entries
        return knex('menuItems_types').insert([
          {
            menuItems_id: 1,
            types_id: 1
          },
          {
            menuItems_id: 2,
            types_id: 2
          },
          {
            menuItems_id: 3,
            types_id: 3
          }
        ])
      })
  }
  