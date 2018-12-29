import React, { Component } from "react"
import Card from '../../components/CardNewArticle'

class NewArticles extends Component {
  
  render() {
    return(
      <>
        {this.props.articles.length ? (
          <div className="container">
           <div id="articlesList">
             {this.props.articles.map(article => (           
               <Card key={article.pubId}
                     pubId={article.pubId} 
                     title={article.title}
                     description={article.description}
                     image={article.image}
                    url={article.url}
                    pubDate={article.pubDate} 
                    handleSaveArticle={this.props.handleSaveArticle}/>
             ))}
                        
           </div>
           </div>
        ) : (
           null
        )}      
      </>
    )
  }

}

export default NewArticles