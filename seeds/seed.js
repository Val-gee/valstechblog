const sequelize = require('../config/connection');
const { User, Blog, Comment } = require('../models');

const userData = require('./userSeed.json');
const blogData = require('./blogSeed.json');
const commentData = require('./commentSeed.json');


const seedDatabase = async () => {
    await sequelize.sync({ force: true });

    const users = await User.bulkCreate(userData, {
        individualHooks: true,
        returning: true
    });

    const blogs = await Blog.bulkCreate(blogData, {
        user_id: users.id,
        returning: true
    })

    for (const comment of commentData) {
        await Comment.create({
            ...comment,
            blog_id: comment.blog_id,
            user_id: comment.user_id
        })
    }

    process.exit(0);
};

seedDatabase();