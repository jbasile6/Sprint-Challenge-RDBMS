
exports.up = function(knex, Promise) {
  return knex.schema.createTable('projects', function(tbl) {
      //PROJECTS
      
    tbl.increments();//primary key, ID

    tbl.string('name', 128)//project name
        .notNullable()
        .unique();

    tbl.string('description', 500)// project description
        .notNullable();

    tbl.boolean('is_completed')// project is completed identifier
        .notNullable();
  })


  //ACTIONS
  .createTable('actions', function(tbl) {

    tbl.increments(); //actions primary key

    tbl.string('action_description', 128)//action description
        .notNullable();

    tbl.string('notes', 500) //action notes
        .notNullable();

    tbl.boolean('is_completed')//action is complete identifier
        .notNullable();

    tbl.integer('project_id')//foreign key, matches project id
        .unsigned()//need for foreign key
        .notNullable()
        .references('id')
        .inTable('projects')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')

  })
};

exports.down = function(knex, Promise) {
  
};
