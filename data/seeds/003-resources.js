
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('resources').del()
    .then(function () {
      // Inserts seed entries
      return knex('resources').insert([
        { resource_name: 'Greg', resource_descript: 'Person', project_id: 2},
        { resource_name: 'Greg', resource_descript: 'Person', project_id: 1},
        { resource_name: 'Greg', resource_descript: 'Person', project_id: 3}
      ]);
    });
};
