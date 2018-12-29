const app = require("express")
const router = require("express").Router();
const articleRoutes = require("./articleRoutes");
const specialRoutes = require('./specialRoutes')
const newsRoutes = require("./nasaNewsRoutes");

// Article routes

// Matches with "/api/articles"
router.use("/articles", articleRoutes)
// delete all articles "/api/deleteallarticles"
router.use("/deleteallarticles", specialRoutes)
// Matches with "/api/scrapArtilces"
router.use("/scrapArtilces", newsRoutes)

module.exports = router;
