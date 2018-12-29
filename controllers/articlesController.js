// Require all models
var db = require("../models");

// Defining methods for the artcilesController
module.exports = {
  findAll: function(req,res) {
    db.Article.find({})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err))
  },
  findWhere: function(req, res) {
    db.Article
      .find(req.query)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },  
  findById: function(req, res) {
    db.Article
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.Article
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  createUpdate: function(req,res) {
    // body has an article
    let article = req.body
    // Create or Update
    db.Article.findOne({ pubId: { $eq: article.pubId } })
      .then((r) => {
        if (r === null) {
         // create 
         db.Article.create(article)
           .then(() => res.sendStatus(200))
           .catch(err => res.status(422).json(err))
       } else {
         // Update 
         db.Article.updateOne( { pubId : { $eq: article.pubId} } , { $set: article } )
           .then(() => res.sendStatus(200))
           .catch(err => res.status(422).json(err))
       }
    })
    .catch(err => res.status(422).json(err))
  },
  update: function(req, res) {
    db.Article
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Article
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  removeAll : function(req, res) {
    // Delete all documents
    db.Article.deleteMany({})
      .then(() => res.sendStatus(200))
      .catch(err => res.status(422).json(err))
  }

}