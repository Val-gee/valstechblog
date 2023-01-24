const router = require('express').Router();
const { Blog } = require('../../models');
const authorize = require('../../utils/authorize');

router.get('/', authorize, async (req, res) => {
    console.log(`GET /api/blogs`);

    try {
        const blogData = await Blog.findAll({
            where: { user_id: req.session.user_id }
        });
        console.log(blogData);

        const blogs = blogData.map((blog) => blog.get({ plain: true }));
        console.log(blogs);

        res.render('dashboard', {
            blogs,
            logged_id: req.session.logged_id
        })

    } catch (err) {
        console.log(err);
        res.status(500).json(err)
    }
});

router.post('/', authorize, async (req, res) => {
    console.log("POST /api/blogs");
    try {
        const newBlog = await Blog.create({
            ...req.body,
            user_id: req.session.user_id
        });

        res.status(200).json(newBlog);
    } catch (err) {
        console.log(err);
        res.status(500).json(err)
    }
});

router.delete('/:id', authorize, async (req, res) => {
    console.log('DELETE /api/blogs/:id');

    try {
        const blogData = Blog.destroy({
            where: {
                user_id: req.session.user_id
            }
        });

        if (!blogData) {
            res.status(400).json({ message: 'No blog found with this id!'});
            return;
        }

        res.status(200).json(blogData);

    } catch (err) {
        console.log(err);
        res.status(500).json(err)
    }
})


module.exports = router;