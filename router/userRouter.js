const {getUser,postUser,putUser,deleteUser,login } = require("../controller/userController");
const User = require("../model/user"); // Import the User model

const router = require("express").Router();

router.get('/', getUser);
router.post('/', postUser);
router.put('/:id', putUser);
router.delete('/:id', deleteUser);
router.post('/login', login);

module.exports = router;
