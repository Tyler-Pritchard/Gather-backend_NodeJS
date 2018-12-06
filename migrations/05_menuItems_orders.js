exports.up = function(knex, Promise) {

    return knex.schema.createTable('menuItems_orders', table => {
      table.increments();
      table.integer('menuItems_id').references('id').inTable('menuItems').onDelete('CASCADE');
      table.integer('order_id').references('id').inTable('orders').onDelete('CASCADE');
      table.integer('quantity').notNullable().defaultsTo(1);
      table.timestamps(true, true)
    })
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTable('menuItems_orders')
  };