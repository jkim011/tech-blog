const router = require('express').Router();
const { Post, User } = require('../models/');
const withAuth = require('../utils/auth');

// Shows all of user's own posts in dashboard
router.get('/', withAuth, async (req, res) => {
  try {
    const postData = await Post.findAll({
      where:{"userId": req.session.userId},
      include: [User]
    });
    const posts = postData.map((post) => post.get({ plain: true }));
    res.render('dashboard', {
      posts, loggedIn: req.session.loggedIn
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Takes user to page to create new post 
router.get('/new', withAuth, (req, res) => {
  res.render('new-post', {
    loggedIn: req.session.loggedIn
  });
});

// Shows user options to edit and delete post after clicking on it
router.get('/edit/:id', withAuth, async (req, res) => {
  try {
    const postData = await Post.findByPk(req.params.id);

    if (postData) {
      const post = postData.get({ plain: true });

      res.render('edit-post', {
        post, loggedIn: req.session.loggedIn
      });
    } else {
      res.status(404).end();
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;