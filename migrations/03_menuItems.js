exports.up = function (knex, Promise) {

  return knex.schema.createTable('menuItems', table => {
    table.increments()
    table.string('name').notNullable().defaultsTo('')
    table.integer('price') //.notNullable()
    table.string('description').notNullable()
    table.integer('type_id').notNullable().references('id').inTable('types').onDelete('CASCADE');
    table.string('photo_url').notNullable()
    table.for
    table.timestamps(true, true)
  })
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('menuItems')
};