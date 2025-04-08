const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req, res) => {
    res.send("Server is running");
});

app.listen(port, () => {
    console.log(`Server is running at port ${port}`);
});

app.post('/signup', (req, res) => {
    const { username, email, password, dateOfBirth } = req.body;

    if (!username) {
        return res.status(400).json({ error: "Username cannot be empty" });
    }
    if (!email) {
        return res.status(400).json({ error: "Email cannot be empty" });
    }
    if (!password) {
        return res.status(400).json({ error: "Password cannot be empty" });
    }
    if (password.length <= 8 || password.length > 16) {
        return res.status(400).json({ error: "Password length should be greater than 8 and less than or equal to 16" });
    }

    res.status(201).json({
        message: "User created successfully",
        user: {
            username,
            email,
            dateOfBirth
        }
    });
});
