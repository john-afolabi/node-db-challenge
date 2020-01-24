exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("resources")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("resources").insert([
        { name: "Wood", description: "The wood must be dry" },
        { name: "Matches", description: "Or a lighter" },
        { name: "Tent" },
        { name: "Steak", description: "The very best steak available" },
        { name: "Grill", description: "Outdoor relable grill" },
        { name: "Seasoning", description: "Excellent seasoning" }
      ]);
    });
};
