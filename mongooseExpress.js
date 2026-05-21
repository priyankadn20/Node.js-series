const express = require('express');
const mongoose = require('mongoose');

const app = express();
app.use(express.json());

// Connect
mongoose.connect('mongodb://localhost:27017/friendsdb')
    .then(() => console.log('MongoDB connected!'))
    .catch(err => console.log(err));

// Schema & Model
const friendSchema = new mongoose.Schema({
    name: { type: String, required: true },
    city: String
});
const Friend = mongoose.model('Friend', friendSchema);

// GET — shob friends
app.get('/friends', async (req, res) => {
    try {
        const friends = await Friend.find();
        res.json(friends);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// POST — notun friend
app.post('/friends', async (req, res) => {
    try {
        const newFriend = await Friend.create({
            name: req.body.name,
            city: req.body.city
        });
        res.status(201).json(newFriend);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// DELETE — friend delete
app.delete('/friends/:id', async (req, res) => {
    try {
        await Friend.findByIdAndDelete(req.params.id);
        res.json({ message: 'Deleted!' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

app.listen(3000, () => console.log('Server: http://localhost:3000'));