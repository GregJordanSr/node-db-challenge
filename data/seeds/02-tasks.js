
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tasks')
    .then(function () {
      // Inserts seed entries
      return knex('tasks').insert([
        {taskDescription: "run around", taskNotes: "Jumping", projectId: 1},
        {taskDescription: "run around", taskNotes: "Jumping", projectId: 2},
        {taskDescription: "run around", taskNotes: "Jumping", projectId: 3}
      ]);
    });
};
