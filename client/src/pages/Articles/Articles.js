import React, { Component } from "react"
import Card from '../../components/CardArticle'

class Articles extends Component {
  
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
                     handleDeleteArticle={this.props.handleDeleteArticle}/>
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

export default Articles