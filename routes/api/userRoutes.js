const express = require('express');
const router = express.Router();

const {
    getUsers,
    getUser,
    createUser,
    updateUser,
    deleteUser,
    addFriend,
    deleteFriend
} = require("../../controllers/userController");

router.route('/users')
    .get(getUsers)
    .post(createUser);

router.route('/users/:userId')
    .get(getUser)
    .put(updateUser)
    .delete(deleteUser);

router.route('/users/:userId/friends/:friendId')
    .post(addFriend)
    .delete(deleteFriend);

module.exports = router;