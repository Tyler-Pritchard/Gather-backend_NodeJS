//CREATE table for 'users'
exports.up = function(knex, Promise) {

    return knex.schema.createTable('users', table => {
      table.increments()
      table.string('first_name').notNullable().defaultsTo('')
      table.string('last_name').notNullable().defaultsTo('')
      table.string('email').notNullable();
      table.string('password').notNullable();
      table.timestamps(true, true)
    })
  };
  
  //DELETE table for 'users'
  exports.down = function(knex, Promise) {
   return knex.schema.dropTable('users')
  };