
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('projects').del()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        { project_name: 'Draw a picture', project_descript: 'Take the time to randomly draw a pic', project_completed: false, task_id: 3, resource_id: 2},
        { project_name: 'Color in my coloring book', project_descript: 'Relax with my coloring book', project_completed: false, task_id: 3, resource_id: 2},
        { project_name: 'Help wife hang pics', project_descript: 'Grab my screwdriver, screws and hooks and hang pics', project_completed: false, task_id: 3, resource_id: 2}
      ]);
    });
};
