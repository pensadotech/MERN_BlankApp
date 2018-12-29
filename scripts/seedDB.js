const mongoose = require("mongoose");
const db = require("../models");

// Connect to the Mongo DB
var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/nasanewsmern";
mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true
});

const articleSeed = [{
    pubId: '1',
    title: 'Test Article 1',
    description: 'Description 1',
    url: 'www//google.com'
  },
  {
    pubId: '2',
    title: 'Test Article 2',
    description: 'Description 2',
    url: 'www//pensadotech.com'
  }
]

db.Article
  .remove({})
  .then(() => db.Article.collection.insertMany(articleSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!")
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  })