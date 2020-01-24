exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("tasks")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("tasks").insert([
        {
          project_id: 1,
          step: 1,
          description: "Gather wood",
          notes: "Extra notes for gathering wood"
        },
        {
          project_id: 1,
          step: 2,
          description: "Set wood together on ground"
        },
        {
          project_id: 1,
          step: 3,
          description: "Light wood with matches",
          notes: "Extra notes for making fire"
        },
        {
          project_id: 2,
          step: 1,
          description: "Unpack tents"
        },
        {
          project_id: 2,
          step: 2,
          description: "Set tent stakes"
        },
        {
          project_id: 3,
          step: 1,
          description: "Season steak",
          notes: "Extra notes for type of seasoning"
        },
        {
          project_id: 3,
          step: 2,
          description: "Run rods through tent into stakes"
        },
        {
          project_id: 3,
          step: 3,
          description: "Set steak on grill for 4 minutes per side"
        }
      ]);
    });
};
