const { User } = require('../models');

const userdata =
[
  {
    username: "Jared",
    password: "password"
  },
  {
    username: "Gabby",
    password: "password"
  },
  {
    username: "Ryan",
    password: "password"
  }
];

const seedUser = () => User.bulkCreate(userdata, {
  individualHooks: true,
  returning: true,
});

module.exports = seedUser;