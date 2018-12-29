// API-News-Routes 
const router = require("express").Router();
const nasaController = require("../../controllers/nasaNewsController")

// Matches with "/api/scrapArtilces"
router.route("/")
  .get(nasaController.getNasaNews)

module.exports = router