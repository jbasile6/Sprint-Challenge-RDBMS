
exports.seed = function(knex, Promise) {
      return knex('actions').insert([
        {id: 1, action_description: 'Project 1, Action 1', notes: 'This is the first action for the first project', is_completed: false, project_id: 1},
        {id: 2, action_description: 'Project 1, Action 2', notes: 'This is the second action for the first project', is_completed: false, project_id: 1},
        {id: 3, action_description: 'Project 2, Action 1', notes: 'This is the first action for the second project', is_completed: false, project_id: 2},
        {id: 4, action_description: 'Project 2, Action 2', notes: 'This is the second action for the second project', is_completed: false, project_id: 2},
        {id: 5, action_description: 'Project 3, Action 1', notes: 'This is the first action for the third project', is_completed: false, project_id: 3},
        {id: 6, action_description: 'Project 3, Action 2', notes: 'This is the second action for the third project', is_completed: false, project_id: 3}
      ]);
};
