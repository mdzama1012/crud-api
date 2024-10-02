const express = require('express');
const cors = require('cors');
const app = express();

const getUsersRouter = require('./routes/getUsers.js');
const getUserRouter = require('./routes/getUser.js');
const createUserRouter = require('./routes/createUser.js');
const deleteUserRouter = require('./routes/deleteUser.js');
const updateUserRouter = require('./routes/updateUser.js');

app.use(express.json());

app.use(cors({ origin: 'http://localhost:3001' }));

// app.get('/', async (req, res) => {
//     try {
//         const allUsers = await pool.query(
//             "SELECT * FROM users;"
//         );
//         res.status(200).json(allUsers.rows);
//     } catch (dbError) {
//         console.log(e);
//         res.status(500).json({ message: 'server error' });
//     }
// });

app.use('/api/v1/getusers', getUsersRouter);
app.use('/api/v1/getuser', getUserRouter);
app.use('/api/v1/createuser', createUserRouter);
app.use('/api/v1/deleteuser', deleteUserRouter);
app.use('/api/v1/updateuser', updateUserRouter);

const PORT = 3000;

app.listen(PORT, () => {
	console.log(`Server running on the PORT: ${PORT}`);
});
