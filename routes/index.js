const express = require('express');
const controller = require('../controllers');


const router = express.Router();
router.get('/rooms/:roomId/reviews', controller.reviews.get);
router.post('/rooms/:roomId/reviews', controller.reviews.post);
router.post('/rooms/:roomId/rooms', controller.reviews.postRooms);
router.post('/rooms/:roomId/users', controller.reviews.postUsers);
router.put('/rooms/:roomId/reviews', controller.reviews.put);
router.delete('/rooms/:roomId/reviews', controller.reviews.delete);
router.delete('/rooms/:roomId/rooms', controller.reviews.deleteRooms);
router.delete('/rooms/:roomId/users', controller.reviews.deleteUsers);

module.exports = router;


// 