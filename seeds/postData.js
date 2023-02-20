const { Post } = require('../models');

const postdata =
[
  {
    postTitle: "Handlebars",
    postContent: "I am not a fan of handlebars. It is quite confusing and annoying.",
    userId: 1
  },
  {
    postTitle: "MVC framework",
    postContent: "Model-view-controller is a framework to separate an application into those three components, making it more organized and easy to collaborate.",
    userId: 2
  },
  {
    postTitle: "Routes",
    postContent: "I am starting to get more comfortable with writing routes now.",
    userId: 3
  }
];

const seedPost = () => Post.bulkCreate(postdata);

module.exports = seedPost;