exports.up = function(knex, Promise) {

    return knex.schema.createTable('menuItems_types', table => {
      table.increments();
      table.integer('menuItems_id').references('id').inTable('menuItems').onDelete('CASCADE');
      table.integer('types_id').references('id').inTable('types').onDelete('CASCADE');
      table.timestamps(true, true)
    })
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTable('menuItems_types')
  };