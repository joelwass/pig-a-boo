import React, { Component } from 'react'
import pig3 from '../images/pig3.jpeg'
import '../styles/App.css'

class ErrorPage extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-body">
          <h3>Uh oh!</h3>
          <div className="BookSummary">
            <div className="AuthorText">
              <p>Uh oh! An error occurred while processing your transaction. Please try again or contact me!</p>
            </div>
          </div>
        </div>
        <img className="PeekingPigLeft" alt="Peeking Pig" src={pig3}/>
      </div>
    )
  }
}

export default ErrorPage
