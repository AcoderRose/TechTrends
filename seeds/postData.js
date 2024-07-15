const { Post } = require('../models');

const postData = [
  {
    title: "Benefits of Using MVC Architecture",
    content:
      "MVC architecture helps in separating the concerns of the application, which leads to better organization of code, easier debugging, and enhanced testability.",
    user_id: 1,
  },
  {
    title: "Advantages of ORM in Database Management",
    content: `ORM reduces the need for writing complex SQL queries by allowing developers to interact with the database using the programming language they are already familiar with, thus increasing productivity and reducing errors.`,
    user_id: 2,
  },
];

const seedPosts = async () => {
  await Post.bulkCreate(postData);
};

module.exports = seedPosts;
