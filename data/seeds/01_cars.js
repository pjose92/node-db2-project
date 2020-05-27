exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cars').del()
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([
        {VIN: 'jp123hj123467898j8h', make: 'Jeep', model: 'Wrangler', milage: 12},
        {VIN: 'jp123hj123467898j9h', make: 'Tesla', model:'Model 3', milage: 2},
        {VIN: 'jp123hj123467898j0h', make: 'BMW', model:'M850i xDrive Gran Coupe', milage: 35}
      ]);
    });
};
