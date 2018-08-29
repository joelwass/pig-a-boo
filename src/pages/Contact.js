import React, { Component } from 'react'
import '../styles/App.css'

class Contact extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-body">
          <h3>Contact Me</h3>
          <div className="BookSummary">
            <div className="AuthorText">
              <p>I hope you enjoyed the book!</p>
              <p>I welcome any comments, questions, or concerns that people
have about this book, Halloween, or pigs in their lives</p>
              <p>Email me at: <a href="emailto:pigaboobooks@gmail.com">pigaboobooks@gmail.com</a></p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Contact
