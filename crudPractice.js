const express = require('express');
const app = express();
app.use(express.json());

let friends = [
    { id:1,name:'priyanka'},
    { id:2,name:'rahul'},
    { id:3,name:'debnath'}
];

//GET 

app.get('/friends', (req,res) => {
    res.json(friends);
});

//post
app.post('/friends',(req,res) => {
    const newFrineds ={id:friends.length + 1, name:req.body.name}
    friends.push(newFrineds);
    res.status(201).json(newFrineds)
})

// Update
app.put('/friends/:id',(req,res)=>{
    const friend = friends.find(f=>f.id === parseInt(req.params.id));
    if(!friends) return res.status(404).json({message:'do not find'});
    friend.name = req.body.name;
    res.json(friend);
})

// Delete
app.delete('/friends/:id', (req, res) => {
    friends = friends.filter(f => f.id !== parseInt(req.params.id));
    res.json({ message: 'Deleted!' });
});



app.listen(6000,()=>console.log('Server:http://localhost:6000'))