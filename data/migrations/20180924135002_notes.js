
exports.up = function(knex, Promise) {
  return knex.schema.createTable('notes', function(tbl){
    tbl.increments()
    tbl.string("id").notNullable()
    tbl.string('title').notNullable()
    tbl.string('textBody').notNullable()
    tbl.integer('__v').defaultTo(0)
    tbl.integer("length")
    tbl.string("time")
    tbl.string("tags").defaultTo("")
    tbl.integer("index")
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('notes')
};
