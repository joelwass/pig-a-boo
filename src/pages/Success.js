import React, { Component } from 'react'
import pig3 from '../images/pig3.jpeg'
import '../styles/App.css'

class Success extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-body">
          <h3>Purchase Complete!</h3>
          <div className="BookSummary">
            <div className="AuthorText">
              <p>Thank you so much for purchasing the book! Please let me know what you think, enjoy!</p>
            </div>
          </div>
        </div>
        <img className="PeekingPigLeft" alt="Peeking Pig" src={pig3}/>
      </div>
    )
  }
}

export default Success
