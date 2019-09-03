
exports.up = function(knex) {
  return knex.schema.createTable('projects', tbl => {
      tbl.increments();

      tbl
        .string('projectName', 255)
        .notNullable()
        .unique();

    tbl
        .string('projectDescription', 4000)

    tbl
        .string('projectCompletion')
        .notNullable()
        .defaultTo(false);
  } )

  .createTable('resources', tbl => {
      tbl.increments();

      tbl   
        .string('resourceName',255)
        .notNullable();

    tbl
        .string('resourceDescription', 4000)

    tbl 
        .integer('projectId')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('projects')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');
  })

  .createTable('tasks', tbl => {
      tbl.increments();

      tbl
        .string('taskDescription', 4000)
        .notNullable();

    tbl
        .string('taskNotes', 4000)

    tbl
        .boolean('taskCompletion')
        .notNullable()
        .defaultTo(false);

    tbl 
        .integer('projectId')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('projects')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');
  })
  
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExist('tasks')
    .dropTableIfExist('resources')
    .dropTableIfExist('projects');
};
