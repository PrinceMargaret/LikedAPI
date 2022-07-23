const express = require('express');
const router = express.Router();

const {addLikedSong,getLikedSong,CreateSong,removeLiked}=require('../controllers/likedSongController');


router.post('/addLikedSong', addLikedSong);
router.get('/getLikedSong', getLikedSong);
router.post("/createSong",CreateSong);
router.delete("/removeLiked/:SongId",removeLiked)




module.exports = router;