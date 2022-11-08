const express = require("express")
const authController = require("../controllers/authController");
const authMiddleware = require("../middlewares/authMiddleware")

const router = express.Router();

router.route('/signup').post(authController.createUser); // /users/signup
router.route('/login').post(authController.loginUser);
router.route('/logout').get(authController.logoutUser);
router.route('/dashboard').get(authMiddleware, authController.getDasboardPage);



module.exports = router;