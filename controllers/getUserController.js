const pool = require('../config/db.js');

const getUser = async (req, res) => {
    const userId = parseInt(req.headers.user_id);
    try {
        const allUsers = await pool.query(
            `SELECT * FROM users WHERE user_id=$1;`, [userId]
        );
        res.status(200).json(allUsers.rows);
    } catch (dbError) {
        console.log(dbError);
        res.status(500).json({ message: 'server error' });
    }
};

module.exports = getUser;
