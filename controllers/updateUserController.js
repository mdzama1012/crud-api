const pool = require('../config/db.js');

const updateUser = async (req, res) => {
	const userId = parseInt(req.headers.user_id);
	const { first_name, last_name, mobile_number, email, age } = req.body;
	try {
		if (first_name) {
			await pool.query(`UPDATE users SET first_name=$1 WHERE user_id=$2;`, [
				first_name,
				userId,
			]);
		}
		if (last_name) {
			await pool.query(`UPDATE users SET last_name=$1 WHERE user_id=$2;`, [
				last_name,
				userId,
			]);
		}
		if (mobile_number) {
			await pool.query(`UPDATE users SET mobile_number=$1 WHERE user_id=$2;`, [
				mobile_number,
				userId,
			]);
		}
		if (email) {
			await pool.query(`UPDATE users SET email=$1 WHERE user_id=$2;`, [
				email,
				userId,
			]);
		}
		if (age !== undefined) {
			await pool.query(`UPDATE users SET age=$1 WHERE user_id=$2;`, [
				age,
				userId,
			]);
		}
		res.status(200).json({ message: 'user updated' });
	} catch (dbError) {
		console.log(dbError);
		res.status(500).json({ message: 'server error' });
	}
};

module.exports = updateUser;
