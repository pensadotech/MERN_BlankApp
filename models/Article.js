// dependencies
var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

var ArticleSchema = new Schema({
  pubId: String,
  title : {
    type: String,
    required: true
  },
  description: String,
  image: String,
  url:  {
    type: String,
    required: true 
  },
  pubDate: {
    type: String
  },
  pubId : {
    type: String
  },
  note: {
    type: Schema.Types.ObjectId,
    ref: "Note"
  }
})

// This creates our model from the above schema, using mongoose's model method
var Article = mongoose.model("Artcile", ArticleSchema);

// Export the Note model
module.exports = Article;