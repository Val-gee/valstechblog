const router = require('express').Router();
const { Comment } = require('../../models');
const authorize = require('../../utils/authorize');


router.post('/:blog_id', authorize, async (req, res) => {

    console.log(`POST /api/comments/:blog_id`);

    try{
        const newComment = await Comment.create({
            ...req.body,
            blog_id: req.params.blog_id,
            user_id: req.session.user_id
        });

        res.status(200).json(newComment);
    } catch(err) {
        console.log(err);
        res.status(500).json(err)
    }
});


module.exports = router;