const { User } = require('../models');

const userData = [
  {
    username: 'devDolphin',
    email: 'splash@dev.com',
    password: 'Ocean127',
  },
  {
    username: 'pythonPanda',
    email: 'bamboo@python.com',
    password: 'CodePanda458',
  },
  {
    username: 'reactRaccoon',
    email: 'raccoon@react.com',
    password: 'ReactRocks789',
  },
  {
    username: 'nodeNightingale',
    email: 'sing@node.com',
    password: 'NightNode325',
  },
  {
    username: 'sqlSquirrel',
    email: 'nuts@sql.com',
    password: 'Acorn657',
  },
  {
    username: 'javaJaguar',
    email: 'roar@java.com',
    password: 'JungleRun990',
  },
];

const seedUsers = async () => {
  await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });
};

module.exports = seedUsers;
