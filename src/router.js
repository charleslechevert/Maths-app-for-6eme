const { Router } = require("express");
const mainController = require("./controllers/mainController");
const adminController = require("./controllers/adminController");
const menuController = require("./controllers/menuController");
const storyController = require("./controllers/storyController");
const gameController = require("./controllers/gameController");
const games = require('../data/games');

const router = Router()

router.get("/", mainController.renderHomePage);
router.get("/signup", adminController.renderSignupPage)
router.post("/signup", adminController.addPlayer)

router.get("/signin", adminController.renderSigninPage)

router.get("/:chapter", menuController.renderMenuPage)

router.get("/story/:story", storyController.renderStoryPage)

router.get("/game/:game", gameController.renderGamePage)








module.exports = router;