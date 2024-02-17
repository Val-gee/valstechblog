const router = require('express').Router();
const { Blog, User, Comment } = require('../models');
const authorize = require('../utils/authorize');

router.get('/', async (req, res) => {
    console.log(`GET /`);

    try {
        const blogData = await Blog.findAll({
            include: [
                {
                    model: User,
                    attributes: ['name'],
                },
            ],
        });

        const blogs = blogData.map((blog) => blog.get({ plain: true }));
        
        console.log(req.session);
        res.render('homepage', {
            blogs,
            logged_in: req.session.logged_in
        });

    } catch (err) {
        console.log(err);
        res.status(500).json(err)
    }
});

router.get('/blog/:id', async (req, res) => {
    console.log(`GET /:blog_id`);

    try {

        const blogData = await Blog.findByPk(req.params.id, {
            include: [
                {
                    model: User,
                    attributes: [ "name" ],
                },
                {
                    model: Comment,
                    attributes: [ "comment", "date_created" ]
                }
            ],
        });

        const blog = blogData.get({ plain: true });

        res.render('blog', {
            ...blog,
            logged_in: req.session.logged_in
        })
    } catch (err) {
        console.log(err);
        res.status(500).json(err)
    }
});

router.get('/dashboard', authorize, async (req, res) => {
    console.log(`GET /dashboard`);

    try {

        const userdata = await User.findByPk(req.session.user_id, {
            attributes: { exclude: ['password'] },
            include: { model: Blog },
        });

        const user = userdata.get({ plain: true });

        res.render('dashboard', {
            ...user,
            logged_in: true,
        });

    } catch (err) {
        console.log(err);
        res.status(500).json(err)
    }
});

router.get('/login', async (req, res) => {
    console.log(`GET /login`);

    if (req.session.logged_in) {
        res.redirect('/dashboard');
        return;
    }

    res.render('login');
});

router.get('/signup', async (req, res) => {
    console.log(`GET /signup`);

    if (req.session.logged_in) {
        res.redirect('/dashboard');
        return;
    }
    
    res.render('signup');
});

module.exports = router;