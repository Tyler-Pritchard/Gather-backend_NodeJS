
exports.seed = function(knex, Promise) {
    // Deletes ALL existing entries
    return knex('users')
      .del()
      .then(() => {
        // Inserts seed entries
        return knex('users').insert([
          {
            id: 1,
            first_name: 'Nick',
            last_name: 'Jonas',
            email: 'nickjonas@purityrings.com',
            password: 'password'
          },
          {
            id: 2,
            first_name: 'Joe',
            last_name: 'Jonas',
            email: 'joejonas@purityrings.com',
            password: 'password'

          },
          {
            id: 3,
            first_name: 'Kevin',
            last_name: 'Jonas',
            email: 'kevinjonas@purityrings.com',
            password: 'password'
          }
        ])
      })
  }
  