const { User, Thought, Reaction } = require("../models");
const mongoose = require("mongoose");

const connection = require("../config/connection");

// Seed data
const users = [
  {
    username: "Barry",
    email: "barry@gmail.com",
    thought: [],
  },
];

console.log(connection);

// Connects to server
connection.once("open", async () => {
  console.log("connected");

  // Delete existing students
  await User.deleteMany({});

  // Adds seed data to database
  await User.collection.insertMany(users);

  console.table(users);
  console.info("Seeding complete!");
  process.exit(0);
});
