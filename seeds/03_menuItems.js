exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('menuItems')
    .del()
    .then(() => {
      // Inserts seed entries
      return knex('menuItems').insert([{
          name: 'Breakfast Sandwich',
          price: 0650,
          description: 'Egg, bacon, cheddar cheese on english muffin',
          type_id: 1,
          photo_url: 'localhost:3001/images/breakfastsandwich.jpg'
        },
        {
          name: 'B.L.T',
          price: 1100,
          description: 'Bacon, greens, tomato jam, spicy aioli on toasted wheat bread',
          type_id: 2,
          photo_url: '../public/images/blt.jpg'
        },
        {
          name: 'Mixed Green Salad (v)',
          price: 0250,
          description: 'Original/Cilantro Lime/Orange balsamic',
          type_id: 3,
          photo_url: '../public/images/salad.jpg'
        }
      ])
    })
}