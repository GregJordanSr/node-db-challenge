
exports.up = function(knex) {
  return knex.schema.createTable('projects', tbl => {
    tbl.increments();

    tbl
        .string('project_name', 255)
        .unique()
        .notNullable();

    tbl 
        .string('project_descript', 4000);

    tbl 
        .string('project_completed', 255)
        .notNullable();


    tbl
        .integer('task_id')
        .notNullable()
        .unsigned()
        .references('id')
        .inTable('task')
        .onUpdate('CASCADE')
        .onDelete('RESTRICT');

    tbl
        .integer('resource_id')
        .notNullable()
        .unsigned()
        .references('id')
        .inTable('resources')
        .onUpdate('CASCADE')
        .onDelete('RESTRICT');
  })
  .createTable('task', tbl => {
    tbl.increments();
    
    tbl
        .string('task_name', 4000)
    tbl
        .string('task_descript', 4000)
        .notNullable();
    tbl
        .string('notes', 4000);
    tbl
        .integer('project_id')
        .notNullable()
        .unsigned()
        .references('id')
        .inTable('projects')
        .onUpdate('CASCADE')
        .onDelete('RESTRICT');

    
    tbl 
        .string('task_completed', 255)
        .notNullable();
  })

  .createTable('resources', tbl => {
    tbl.increments();
    
    tbl
        .string('resource_name', 4000);

    tbl 
        .string('resource_descript', 4000);
    
    tbl
        .integer('project_id')
        .notNullable()
        .unsigned()
        .references('id')
        .inTable('projects')
        .onUpdate('CASCADE')
        .onDelete('RESTRICT');
})
};

exports.down = function(knex) {
  return knex.schema
  .dropTableIfExists('resources')
  .dropTableIfExists('task')
  .dropTableIfExists('projects')
};
