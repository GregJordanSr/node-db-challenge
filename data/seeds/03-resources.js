
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('resources')
    .then(function () {
      // Inserts seed entries
      return knex('resources').insert([
        {resourceName: "Joe Jons", resourceDescription: "person", projectId: 1},
        {resourceName: "MaryJones", resourceDescription: "person", projectId: 2},
        {resourceName: "Joe Bush", resourceDescription: "person", projectId: 3}
      ]);
    });
};
