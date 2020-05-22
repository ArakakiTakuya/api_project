exports.up = function (knex) {
  return knex.schema.createTable("restaurants", (t) => {
    t.string("id").unique().notNullable();

    t.string("restaurant_name", 30).notNullable().index();

    t.string("category", 30).notNullable().index();

    t.integer("budget").notNullable().index();

    t.string("image_url").notNullable().index();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("restaurants");
};
