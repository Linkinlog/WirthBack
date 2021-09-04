const express = require('express');
const router = express.Router();
const Post = require('../models/Post')
const auth = require('../middleware/auth')


// @GET
// Get all posts
// Public
router.get('/', async (req, res, next) => {
	const posts = await Post.find({})
	res.json(posts);
});


// @POST
// Make new post
// Private
router.post('/', auth, async (req, res, next) => {
	try {
		const post = new Post({...req.body, user:req.user.id})
		await post.save()
		return res.json({msg: 'Saved!'})
	} catch (error) {
		console.error(error)
		return res.json({msg:'error'})
	}
})

module.exports = router;
