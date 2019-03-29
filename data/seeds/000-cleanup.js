//I had issues with seeding yesterday, wanted to get some practice in

const cleaner = require('knex-cleaner');

exports.seed = function(knex) {
  return cleaner.clean(knex);
}