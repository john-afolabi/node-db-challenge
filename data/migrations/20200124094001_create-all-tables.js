exports.up = function(knex) {
  return knex.schema
    .createTable("projects", table => {
      table.increments();
      table.string("name", 128).notNullable();
      table.string("description");
      table.boolean("completed").defaultTo(false);
    })
    .createTable("tasks", table => {
      table.increments();
      table
        .integer("project_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("projects")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
      table.integer("step");
      table.string("description").notNullable();
      table.string("notes");
      table.boolean("completed").defaultTo(false);
    })
    .createTable("resources", table => {
      table.increments();
      table.string("name", 128).notNullable();
      table.string("description");
    })
    .createTable("project_resource", table => {
      table
        .integer("project_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("projects")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
      table
        .integer("resource_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("resources")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
    });
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists("project_resource")
    .dropTableIfExists("resources")
    .dropTableIfExists("tasks")
    .dropTableIfExists("projects");
};
