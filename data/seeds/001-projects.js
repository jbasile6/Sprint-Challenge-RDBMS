
exports.seed = function(knex, Promise) {
      return knex('projects').insert([
        {id: 1, name: 'James Project', description: 'A project by James', is_completed: false},
        {id: 2, name: 'JIMBO Project', description: 'A project by JIMBO', is_completed: true},
        {id: 3, name: 'A Third Project', description: 'This is the third project', is_completed: false},
      ]);
};
