const pool = require('../config/db.js');

const deleteUser = async (req, res) => {
    const userId = parseInt(req.headers.user_id);
    try {
        await pool.query(
            `DELETE FROM users WHERE user_id = $1`, [userId]
        );
        res.status(200).json({ message: 'user deleted successfully' });
    } catch (dbError) {
        console.log(dbError);
        res.status(500).json({ message: 'server error' });
    }
};

module.exports = deleteUser;
