exports.up = function (knex, Promise) {

  return knex.schema.createTable('orders', table => {
    table.increments();
    table.integer('user_id').references('id').inTable('users').onDelete('CASCADE');
    table.integer('total').notNullable();
    table.integer('tax').notNullable();
    table.integer('tips').notNullable();
    table.timestamps(true, true)
  })
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('orders')
};