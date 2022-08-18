const express = require('express');
const router = express.Router();
// const { trim, escape } = require('validator');
// const Song = require('../models/song.js');
// const User = require('../models/user');

// Add a new song 
// NOTE: this is reserved for admins, i.e. us, not for normal users
router.post('/songs', async (req, res) => {
// leaving the old code commented, this may all change

    // OLD CODE
    // const { title, authors, genre, originalKey } = req.body

    // const song = new Song({
    //     title,
    //     authors,
    //     genre,
    //     originalKey
    // });

    // await song.save();

    // res.status(201).send(song);
})

// get a song from search
router.get('/songs/:song', async (req, res) => {
// self-explanatory. Leaving old code for future reference

    // OLD CODE
    // const title = trim(escape(req.params.song));

    // const song = await Song.findOne({
    //     searchTitle: title
    // });
    // if (!song) {
    //     return res.status(404).send('Song not found')
    // }

    // res.send(song);
})

module.exports = router;