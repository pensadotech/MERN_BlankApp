import React, { Component } from 'react';
// components
import Header from './components/Header'
import NavbarArticle from './components/NavbarArticle'
import NavbarNewArticle from './components/NavbarNewArticle'
import Articles from './pages/Articles'
import NewArticles from './pages/NewArticles'
// API bridge fro express routes
import API from './utils/API'
// Style
import './App.css'

class App extends Component {
 
  state = {
    articles: [],
    newarticles: [],
    currentPage : 'Home'
  }

  componentDidMount() {
    this.loadArticles()
  }

  loadArticles = () => {
      API.getArticles()
      .then(res => {
        // store artciles from DB in Array
        this.setState({ articles: res.data })
      })
      .catch(err => console.log(err))
  }

 findArticleById = (artPubId, articlesArr) => {
    let tgtArticle = null
    for (let i = 0; i < articlesArr.length; i++) {
      let article = articlesArr[i]
      if (article.pubId === artPubId) {
        // found
        tgtArticle = article
        break
      }
    }
    return tgtArticle
  }

  handleSearchNewArticles = event => {  
    API.scrapArtilces()
      .then(res => {
        // Store new articles from ibternet in array
        let tgtarticles = res.data
        this.setState({ newarticles: tgtarticles })
      })
      .catch(err => console.log(err))
  }

  handleClearScreen = event =>  {
     // Clear searched artilces
     let tgtarticles = []
     this.setState({ newarticles: tgtarticles })
  }

  handleDeleteAllArticles = event => {
    // Delete all articles
    API.deleteAllArticles()
      .then(res => {
        this.loadArticles()
      })
      .catch(err => console.log(err))
  }

  handleDeleteArticle = (artPubId) => {
    // Retreive article from new-Articles array
    let articlesArr = this.state.articles
    let article = this.findArticleById(artPubId,articlesArr)   
    // Delete article
    API.deleteArticle(article._id)
    .then(res => {
      this.loadArticles()
    })
    .catch(err => console.log(err))
  }

  handleSaveArticle = (artPubId) => {
    // Retreive article from new-Articles array
    let articlesArr = this.state.newarticles
    let article = this.findArticleById(artPubId,articlesArr)
    // Store article in DB
    API.createUpdateArticle(article)
       .then(res => {
        let pos = articlesArr.indexOf(article)
        articlesArr.splice(pos,1)
        this.setState({ newarticles: articlesArr })
        this.loadArticles()
      })
      .catch(err => console.log(err))
  }

  handlePageChange = page => {
    this.setState({ currentPage: page });
  };

  renderPage = () => {
    // Depending on selection present a navbar and the proper list of artciles
    if (this.state.currentPage === "Search") {
      // Scrape Artticles: Navbar and articles in memory
      return (
        <>
          <NavbarNewArticle 
                handlePageChange={this.handlePageChange}
                handleSearchNewArticles={this.handleSearchNewArticles}
                handleClearScreen={this.handleClearScreen} />
          <NewArticles 
                articles={this.state.newarticles}
                handleSaveArticle={this.handleSaveArticle}/>
  
        </>
      )
    } else {
      // Home : navbar and stored articles in DB
      return (
        <>
          <NavbarArticle 
                 handlePageChange={this.handlePageChange}   
                 handleDeleteAllArticles={this.handleDeleteAllArticles} />         
          <Articles 
                 articles={this.state.articles} 
                 handleDeleteArticle={this.handleDeleteArticle}/>       
        </>
      )
    }
  }
    
  render() {
    
    return (
      <>
      <Header />  
      {this.renderPage()}
      </>
    )
  }
}

export default App;
