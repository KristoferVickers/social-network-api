const express = require('express');
const router = express.Router();

const userController = require('../../controllers/userController');
const {
    getUser,
    getSingleUser,
    createUser,
    updateUser,
    deleteUser,
    addFriend,
    deleteFriend
} = userController;

router.route('/users')
    .get(getUser)
    .post(createUser);

router.route('/users/:userId')
    .get(getSingleUser)
    .put(updateUser)
    .delete(deleteUser);
    
router.route('/users/:userId/friends/:friendId')
    .post(addFriend)
    .delete(deleteFriend);

module.exports = router;