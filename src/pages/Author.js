import React, { Component } from 'react'
import pig3 from '../images/pig3.jpeg'
import kierra_image from '../images/kierra.jpeg'
import '../styles/App.css'

class Author extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-body">
          <h3>About the Author</h3>
          <div className="BookSummary">
            <div className="AuthorImageContainer">
              <img className="BookCoverImage" alt="Book Cover" src={kierra_image}/>
            </div>
            <div className="BookSummaryText">
              Kierra Falbo is an artist, sculpture, mathematician, biomedical engineer, and author.
              She has no shortage of talents, and has recently embarked on writing children's 
              short stories. She enjoys traveling, painting, and helping save kids from fires. 
              She does it all. She's a legend.
            </div>
          </div>
        </div>
        <img className="PeekingPigLeft" alt="Peeking Pig" src={pig3}/>
      </div>
    )
  }
}

export default Author
