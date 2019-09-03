
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('projects')
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        { projectName: 'Draw a picture', projectDescription: 'Take the time to randomly draw a pic'},
        { projectName: 'Color in my coloring book', projectDescription: 'Relax with my coloring book'},
        { projectName: 'Help wife hang pics', projectDescription: 'Grab my screwdriver, screws and hooks and hang pics' }
      ]);
    });
};
