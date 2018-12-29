import React, { Component } from "react"

class Header extends Component {
   
  render() {

    return (
      <>
       <header className="header">
          <div className="row">
            <div className="col-md-4">
               <img src="./images/nasa1.png" alt="NasaLogo" />
            </div>
            <div className="col-md-3 headerLetters">
            </div>
            <div className="col-md-5">
            </div>
          </div>
        </header>

      </>
    )
  }
}

export default Header;