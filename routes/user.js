const express = require('express');
const router = express.Router();
// const mongoose = require('mongoose');
// const User = require('../models/user');
// const Song = require('../models/song');
// const cookieParser = require('cookie-parser');
// const { trim, escape } = require('validator');
// const { urlencoded } = require('body-parser');


// router.use(cookieParser());
// router.use(urlencoded());

// Create account
router.post('/users', async (req, res) => {
// Basic user account creation, this is where the 'Sing Up' view will send to
   

});

// Log in
router.post('/users/login', async (req, res) => {
// Login (self-explanatory)

})

// Log out
router.get('/users/logout', (req, res) => {
// Self-explanatory
    
})

// add song to repertoire
router.get('/users/addSong/:song', async (req, res) => {
    // I'm leaving the mongoose code I had in here for future reference
    // We're probably going to change this but it's just to give an idea of what's going 
    // to happen. I don't think we need to care about this for the time being, if we 
    // can just get the login page to work and have some kind of session or token 
    // that we can test on one other page (e.g. homepage) then we'll start building 
    // the rest of the stuff and adding that validation in later 

    // OLD CODE
    // const song = mongoose.Types.ObjectId(req.params.song);
    // console.log(req.user);
    // console.log('from /users/' + req.body);
    // const _id = req.user._id;

    // const update = await User.findOneAndUpdate({
    //     _id
    // }, {
    //     $addToSet: {
    //         repertoire: song
    //     }
    // }, { new: true }).populate('repertoire');

    // if (!update) return res.status(404).send({ error: 'could not update'});

    // res.status(201).send(update);
})

// remove song
router.get('/users/removeSong/:song', async (req, res) => {
    // Same as for the add song route 

    // OLD CODE
    // const songQuery = escape(req.params.song.toLowerCase());

    // const findSong = await Song.findOne({
    //     searchTitle: songQuery
    // })
    // if (!findSong) return res.status(404).send({ error: 'Could not find song'});
    
    // const song = findSong._id

    // const _id = req.user._id;
    // const update = await User.findOneAndUpdate({
    //     _id
    // }, {
    //     $pull: {
    //         repertoire: song
    //     }
    // }, { new: true }).populate('repertoire');

    // if (!update) return res.status(404).send({ error: 'could not update'});

    // res.status(201).send(update);
})

// Get user (for friend requests, for example)
router.get('/users/:id', async (req, res) => {
// same as add song, we don't need to worry about this just yet, only leaving 
// the old code in for future reference

    // OLD CODE
    // const user = await User.findById(req.params.id).populate('repertoire');
    
    // if (!user) {
    //     return res.status(404).send({ error: 'NO BITCH'});
    // }

    // res.send(user);
})

module.exports = router;