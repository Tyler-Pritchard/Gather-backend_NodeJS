exports.seed = function (knex, Promise) {
  return knex('types')
    .del()
    .then(() => {
      return knex('types').insert([{
          id: 1,
          name: 'breakfast',
          description: 'served in the morning'
        },
        {
          id: 2,
          name: 'lunch',
          description: 'served during the day'
        },
        {
          id: 3,
          name: 'sides',
          description: 'other'
        },
        {
          id: 4,
          name: 'drinks',
          description: 'drinks'
        }
      ])
    })
}