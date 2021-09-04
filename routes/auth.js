const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config')
/* Log in user */
router.post('/', async (req, res, next) => {
	const { username, password, email } = req.body;
	const user = await User.findOne({ username });
	if (!user) {
		return res.json({ msg: 'Login failed!' });
	}
	try {
		await bcrypt.compare(password, user.password, (err, resp) => {
			if (err) {
				console.error(err)
				return res.status(500).send('WHoops!')
			}
			if (resp) {
				console.log(resp);
				const token = jwt.sign({
					user: {
						id: user.id
					}
				}, config.get("jwtSecret"), {expiresIn: '1h'})
				res.json({token})
			} else {
				return res.json({ msg: 'Login failed!' });
			}
		});
	} catch (error) {
		console.error(error)
		res.status(500).send('Whoops!')
	}
});

module.exports = router;
