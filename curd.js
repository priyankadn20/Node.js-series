require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');

const app = express();
app.use(express.json());

// MongoDB connect
mongoose.connect(process.env.MONGO_URL)
    .then(() => console.log('MongoDB connected!'))
    .catch(err => console.log('DB Error:', err));

// Schema
const studentSchema = new mongoose.Schema({
    name: { type: String, required: true },
    city: String,
    course: String
});
const Student = mongoose.model('Student', studentSchema);

// GET
app.get('/students', async (req, res) => {
    try {
        const students = await Student.find();
        res.json(students);
    } catch (err) {
        res.status(500).json({ message: 'Server error!' });
    }
});

// POST
app.post('/students', async (req, res) => {
    try {
        if (!req.body.name) {
            return res.status(400).json({ message: 'Name required!' });
        }
        const student = await Student.create(req.body);
        res.status(201).json(student);
    } catch (err) {
        res.status(500).json({ message: 'Server error!' });
    }
});

// DELETE
app.delete('/students/:id', async (req, res) => {
    try {
        await Student.findByIdAndDelete(req.params.id);
        res.json({ message: 'Deleted!' });
    } catch (err) {
        res.status(500).json({ message: 'Server error!' });
    }
});

// 404
app.use((req, res) => {
    res.status(404).json({ message: 'Route not found!' });
});

// Global error handler
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: 'Something went wrong!' });
});

app.listen(process.env.PORT || 3000, () => {
    console.log(`Server: http://localhost:${process.env.PORT || 3000}`);
});