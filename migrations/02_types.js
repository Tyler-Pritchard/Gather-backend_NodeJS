//CREATE table for 'type'
exports.up = function(knex, Promise) {
    return knex.schema.createTable('types', table => {
      table.increments();
      table.string('name').notNullable().defaultsTo('')
      table.string('description').notNullable()
      table.timestamps(true, true)
    })
  };
  
  //DELETE table for 'users'
  exports.down = function(knex, Promise) {
   return knex.schema.dropTable('types')
  };