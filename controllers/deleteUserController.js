const pool = require('../config/db.js');

const deleteUser = async (req, res) => {
    const { user_id } = req.headers;
    try {
        await pool.query(
            `DELETE FROM users WHERE user_id = $1`, [user_id]
        );
        res.status(200).json({ message: 'user deleted successfully' });
    } catch (dbError) {
        console.log(dbError);
        res.status(500).json({ message: 'server error' });
    }
};

module.exports = deleteUser;
