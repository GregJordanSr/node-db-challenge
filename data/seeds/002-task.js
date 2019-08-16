
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('task').del()
    .then(function () {
      // Inserts seed entries
      return knex('task').insert([
        { task_name: 'get screwdriver', task_descript: 'grab the screwdriver from the tools bag.', notes: " ", project_id: 2, task_completed: false },
        { task_name: 'get coloring book', task_descript: ' grab of the bookshelf ', notes: " ", project_id: 2, task_completed: false },
        { task_name: 'hang pics', task_descript: 'hang pics with the wife.', notes: " ", project_id: 2, task_completed: false }
      ]);
    });
};
