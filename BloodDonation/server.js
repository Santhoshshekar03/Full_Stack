const express = require('express');
const app = express();
const port = 3000; // You can choose any available port

// Middleware to parse JSON requests
app.use(express.json());

// Sample endpoint for handling a sign-in request
app.post('/api/signin', (req, res) => {
    const { username, password } = req.body;

    // Perform authentication logic (replace this with your actual logic)
    if (username === 'example' && password === 'password') {
        res.json({ success: true, message: 'Authentication successful' });
    } else {
        res.status(401).json({ success: false, message: 'Invalid credentials' });
    }
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
