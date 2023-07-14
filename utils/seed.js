// const { User, Thought, Reaction } = require("../models");
const { User } = require("../models");
// const mongoose = require("mongoose");

const connection = require("../config/connection");

// Seed data
const users = [
  {
    username: "Barry",
    email: "barry@gmail.com",
    thought: [],
  },
  {
    username: "Ben Ten",
    email: "ben@gmail.com",
    thought: [],
  },
  {
    username: "Big Red",
    email: "b.red@gmail.com",
    thought: [],
  },
  {
    username: "Smokey_and_the_bandit",
    email: "did.i.see.a.bear@gmail.com",
    thought: [],
  },
  {
    username: "Bugs.Bunny",
    email: "bugs@gmail.com",
    thought: [],
  },
  {
    username: "Yetti",
    email: "hide.n.seek.champ@gmail.com",
    thought: [],
  },
  {
    username: "Nessy",
    email: "do_you_see_me@gmail.com",
    thought: [],
  },
  {
    username: "Al.Copone",
    email: "tommy_gun@gmail.com",
    thought: [],
  },
];

// Connects to server
connection.once("open", async () => {
  console.log("connected");

  // Drop existing users
  await User.deleteMany({});

  // Add users to the collection and await the results
  await User.collection.insertMany(users);

  // Log out the seed data to indicate what should appear in the database
  console.table(users);
  console.info("Seeding complete! 🌱");
  process.exit(0);
});
