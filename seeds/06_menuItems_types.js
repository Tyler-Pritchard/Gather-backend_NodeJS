exports.seed = function (knex, Promise) {
  return knex('menuItems_types')
    .del()
    .then(() => {
      return knex('menuItems_types').insert([{
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