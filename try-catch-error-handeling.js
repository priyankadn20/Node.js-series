const express = require('express');
const app = express();
app.use(express.json());

// Without error handling 😱
app.get('/students', async (req, res) => {
    const students = await Student.find(); 
    res.json(students);
});

// With error handling ✅
app.get('/students', async (req, res) => {
    try {
        const students = await Student.find();
        res.json(students);
    } catch (err) {
        res.status(500).json({ message: 'Server error!' });
    }
});

app.listen(3000, () => console.log('Server: http://localhost:3000'));