import React, { Component } from 'react'
import pig3 from '../images/pig3.jpeg'
import '../styles/App.css'

class Contact extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-body">
          <h3>Contact Me</h3>
          <div className="ContactSummary">
            <div className="ContactText">
              <p>I hope you enjoyed the book!</p>
              <p>I welcome any comments, questions, or concerns that people
have about this book, Halloween, or pigs in their lives.</p>
              <p>Email me at: <a href="emailto:pigaboobooks@gmail.com">pigaboobooks@gmail.com</a></p>
            </div>
            <img className="PeekingPigContactLeft" alt="Peeking Pig" src={pig3}/>
          </div>
        </div>
      </div>
    )
  }
}

export default Contact
