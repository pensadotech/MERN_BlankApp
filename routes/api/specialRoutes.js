const router = require("express").Router();
const articlesController = require("../../controllers/articlesController");

// Matches with "/api/deleteallarticles"
router.route("/")
   .delete(articlesController.removeAll)

module.exports = router