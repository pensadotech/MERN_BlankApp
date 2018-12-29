import React, { Component } from "react"

class Card extends Component {
   
  render() {

    return (
      <>
        <div className="card">
           <div className="row">
             <div className="col-md-4 px-3">
               <div className="card-image">
                 <img className="card-img-top imageShadow imgRnd10 articleImg" src={this.props.image} />
               </div> 
             </div>
             <div className="col-md-8 px-3"> 
                <div className="card-body">
                  <p> pubId: {this.props.pubId} / {this.props.pubDate}</p>
                  <h5 className="card-title">{this.props.title}</h5>
                  <p> {this.props.description} </p> 
                  
                  <div className="d-flex flex-row-reverse">
                     <a id="btnReadMore" href={this.props.url} target="_blank" className="btn btn-light">Read more</a>
                     <button id="btnSave" className="btn btn-secondary" 
                           value={this.props.pubId}
                           onClick={() => this.props.handleSaveArticle(this.props.pubId)}>Save Article</button>
                  </div>
               </div>
             </div>
           </div>
         </div>

      </>
    )
  }
}

export default Card;