const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const User = require('../models/User');
const bcrypt = require('bcryptjs')




/* GET all users page. */
router.get('/', async (req, res, next) => {
	const users = await User.find({});
	res.json({ users });
});


// Register user
router.post('/', [check('username', 'Username and password are required').not().isEmpty(), check('password', 'Password and password are required').isLength({ min: 6 })], async (req, res, next) => {
	const errors = validationResult(req);
	if (!errors.isEmpty()) {
		return res.status(400).json({ errors: errors.array() });
	}

	const { username } = req.body;

	try {
		let user = await User.findOne({ username });

		if (user) {
			return res.status(400).json({ msg: 'User already exists' });
		}
		const newUser = new User({ ...req.body });
    const salt = await bcrypt.genSalt(10);
		newUser.password = await bcrypt.hash(req.body.password, salt);
		await newUser.save();
	} catch (error) {
		console.error(error);
		return res.status(401).send('error');
	}
	res.json({ msg: 'Saved' });
});

module.exports = router;
