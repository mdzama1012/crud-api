const pool = require('../config/db.js');

const getUsers = async (req, res) => {
    try {
        const allUsers = await pool.query(
            `SELECT * FROM users;`
        );
        res.status(200).json(allUsers.rows);
    } catch (dbError) {
        console.log(dbError);
        res.status(500).json({ message: 'server error' });
    }
};

module.exports = getUsers;
