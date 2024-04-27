const express = require("express");
const userController = require("../controllers/userController");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

router.use(express.json());
router.use(express.urlencoded({ extended: true }));

router.get("/me", authMiddleware, userController.getMe);
router.post("/update-user", authMiddleware, userController.updateUser);

module.exports = router;
