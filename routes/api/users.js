const express = require('express');
const router = express.Router();
const gravatar = require('gravatar');
const bcrypt = require('bcryptjs');
const config = require('config');
const jwt = require('jsonwebtoken');
const mysql = require('mysql');
const { check, validationResult } = require('express-validator');
const User = require('../../models/User');
const credentials = require('config');

var con;
var connect = async () => {
	con = await mysql.createConnection(credentials);

	console.log('MySql Connected...');

	con.connect((err) => {
		if (err) throw err;
	});
}

// function ValidateEmail(mail) 
// {
//  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail))
//   {
//     return (true)
//   }
//     alert("You have entered an invalid email address!")
//     return (false)
// }

//@route    POST api/users
//@desc     Register User
//@acess    Public

router.get('/', async (req, res) => {
	if (con == undefined)
	{
		await connect();
	}
	con.query("SELECT * FROM `users`", (err, res) => {
		console.log("hi" + res);
	})
	res.send("");
});

router.post(
	'/',
	[
		check('email', 'Please enter a valid email').isEmail(),
		//ValidateEmail('email'),
		check(
			'password',
			'Please enter a password with 6 or more characters'
		).isLength({ min: 6 })
	],
	async (req, res) => {
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			return res.status(400).json({ errors: errors.array() });
		}
		const { name, email, password } = req.body;
		try {
			// See if user Exists

			let user = await User.findOne({ email });

			if (user) {
				return res
					.status(400)
					.json({ errors: [{ msg: 'User already exists' }] });
			}

			// Get users Gravatar

			const avatar = gravatar.url(email, {
				s: '200',
				r: 'pg',
				d: 'mm'
			});

			user = new User({
				name,
				email,
				avatar,
				password
			});

			// Encrypt Password

			const salt = await bcrypt.genSalt(10);

			user.password = await bcrypt.hash(password, salt);

			// Save user to MongoDB

			await user.save();

			// Return jsonwebtokem

			const payload = {
				user: {
					id: user.id
				}
			};

			jwt.sign(
				payload,
				config.get('jwtSecret'),
				{ expiresIn: 360000 },
				(err, token) => {
					if (err) throw err;
					res.json({ token });
				}
			);
		} catch (err) {
			console.log(err.message);
			res.status(500).send('Server Error!!');
		}
	}
);

module.exports = router;
