const express = require("express");
const authController = require("../controllers/authController");

const router = express.Router();

router.use(express.json());
router.use(express.urlencoded({ extended: true }));

router.post("/register", authController.register);
router.post("/login", authController.login);

module.exports = router;
