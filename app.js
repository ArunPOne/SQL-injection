const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./database');
const User = require('./models/user');
const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// **Vulnerable Route** (Legacy Approach)
app.get('/vulnerable-login', async (req, res) => {
    const { username, password } = req.query;

    try {
        const query = `SELECT * FROM Users WHERE username = '${username}' AND password = '${password}'`;
        const [results] = await sequelize.query(query);

        if (results.length > 0) {
            res.json({ message: 'Login successful', user: results });
        } else {
            res.status(401).json({ message: 'Invalid credentials' });
        }
    } catch (error) {
        res.status(500).json({ message: 'An error occurred', error });
    }
});

// **Protected Route** (Modern Approach)
app.post('/protected-login', async (req, res) => {
    const { username, password } = req.body;

    try {
        const user = await User.findOne({ where: { username, password } });

        if (user) {
            res.json({ message: 'Login successful', user });
        } else {
            res.status(401).json({ message: 'Invalid credentials' });
        }
    } catch (error) {
        res.status(500).json({ message: 'An error occurred', error });
    }
});

// Sync database and start the server
sequelize.sync({ force: true }).then(async () => {
    // Insert test users
    await User.bulkCreate([
        { username: 'admin', password: 'admin123' },
        { username: 'user1', password: 'password1' },
        { username: 'user2', password: 'password2' },
    ]);

    console.log('Database synced and test users added.');

    app.listen(port, () => {
        console.log(`Server running at http://localhost:${port}`);
    });
}).catch(error => console.log('Error syncing database:', error));
