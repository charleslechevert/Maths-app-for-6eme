const { Router } = require("express");
const mainController = require("./controllers/mainController");
const adminController = require("./controllers/adminController");
const menuController = require("./controllers/menuController");
const storyController = require("./controllers/storyController");
const gameController = require("./controllers/gameController");
const statsController = require("./controllers/statsController");
const classController = require("./controllers/classController");
const games = require('../data/games');

const router = Router()

router.get("/", mainController.renderHomePage);
router.get("/about", mainController.renderAboutPage);
router.get("/credit", mainController.renderCreditPage);

router.get("/signup", adminController.renderSignupPage)
router.post("/signup", adminController.addPlayer)

router.get("/signin", adminController.renderSigninPage)
router.post("/signin", adminController.signinPlayer)

router.get("/signout", adminController.renderSignOutPage)
router.post("/signout", adminController.signOutPlayer)

router.get("/forgetpwd", adminController.renderForgetPwdPage)
router.post("/forgetpwd", adminController.forgetPwd)
router.get("/forgetpwd/:id/:token", adminController.forgetPwdClick)
router.post("/forgetpwd/:id/:token", adminController.forgetPwdReset)



router.get("/chapter/:chapter", menuController.renderMenuPage)

router.get("/story/:story", storyController.renderStoryPage)

router.get("/game/:game", gameController.renderGamePage)

router.get("/stats", statsController.renderStatsPage)

router.post("/register", gameController.addRegister)

router.get("/class", classController.renderMenuPage)
router.get("/enrollclass", classController.renderEnrollPage)
router.get("/createclass", classController.renderCreatePage)
router.post("/createclass", classController.createClass)










module.exports = router;