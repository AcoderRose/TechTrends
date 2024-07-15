const { Comment } = require('../models');

const commentData = [
  {
    content: "This blog is pretty cool!",
    post_id: 1,
    user_id: 2,
  },
  {
    content: "I wonder who created this blog?!",
    post_id: 1,
    user_id: 4,
  },
  {
    content: "What a time...",
    post_id: 2,
    user_id: 5,
  },
];

const seedComments = async () => {
  await Comment.bulkCreate(commentData);
};

module.exports = seedComments;
