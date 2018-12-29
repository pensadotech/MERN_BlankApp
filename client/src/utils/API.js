import axios from "axios";

// This utility make a bridge from React client and express routes for actions with DB or AJAX
// The front end will have access to these functions that will invoke an express route
// recognized by the main server routes

export default {
  // Gets all Articles
  getArticles: function () {
    return axios.get('/api/articles')
  },
  // Gets the article with the given id
  getArticle: function (id) {
    return axios.get('/api/articles/' + id)
  },
  // create or update an article
  createUpdateArticle: function (article) {
    return axios.post('/api/articles',article)
  },
  // Deletes the articles with the given id
  deleteArticle: function (id) {
    return axios.delete('/api/articles/' + id)
  },
  // delete all saved articles
  deleteAllArticles: function () {
    console.log('deleteAllArticles')
    return axios.delete('/api/deleteallarticles')
  },
  // get articles from NASA website
  scrapArtilces: function () {
    return axios.get('/api/scrapArtilces')
  }

}