exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("projects")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("projects").insert([
        {
          name: "Build fire",
          description: "Make wood heat up real good."
        },
        {
          name: "Set tent",
          description: "Build a shelter."
        },
        {
          id: 3,
          name: "Make food",
          description: "Prepare a nice meal."
        }
      ]);
    });
};
