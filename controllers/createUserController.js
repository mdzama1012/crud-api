const pool = require('../config/db.js');

const createUser = async (req, res) => {
	const { first_name, last_name, mobile_number, email, age } = req.body;
	try {
		const result = await pool.query(
			`INSERT INTO users (first_name, last_name, mobile_number, email, age)
            VALUES ($1, $2, $3, $4, $5)
						RETURNING user_id`,
			[first_name, last_name, mobile_number, email, age]
		);
		res.status(200).json({
			message: 'user added successfully',
			user_id: result.rows[0].user_id,
		});
	} catch (dbError) {
		console.log(dbError);
		res.status(500).json({ message: 'server error' });
	}
};

module.exports = createUser;
