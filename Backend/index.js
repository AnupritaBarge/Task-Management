const mongoose = require('mongoose');
const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();

const app = express();
app.use(bodyParser.json());

mongoose.connect('',{})
    .then(() => {
        console.log('connected to MongoDB');
    })
    .catch((err) => {
        console.log('error connected to MongoDB', err);
    });

const UserSchema = new mongoose.Schema({

    username : {
        type : String,
        required : true
    },

    password : {
        type : String,
        required : true
    },

});

const User = mongoose.model('user', UserSchema ); // model name User

app.post('/users', async(req, res) => {
    const {username, password} = req.body;
    console.log('/user called');
    try{
        const user = new User({username, password}); //insert into user
        await user.save();
        res.status(200).json({message : 'New User created', user : user});
    }
    catch(err) {
        res.status(500).json({message : 'error creating users', error : err.message});
    }
});

app.get('/users', async(req, res) => {
    console.log('/user called');
    try{
        const users = await User.find(); //select * from user
        res.status(200).json(users);
    }
    catch(err) {
        res.status(500).json({message : 'error fetching users', error : err.message});
    }
});

const port = 4000;
app.listen(port, () => {
    console.log(`Server is running on port : ${port}`);
})