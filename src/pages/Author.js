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
            <div className="AuthorText">
              <p>Kierra Falbo is originally from Pittsburgh, Pennsylvania. She obtained
              her Bachelor’s degree in Biomedical Engineering from the University of
              North Carolina at Chapel Hill and her Master’s degree in Prosthetics and
              Orthotics from Northwestern University. She currently works at the
              University of Michigan.</p>
              <p>In her free time, Kierra is an artist. She learned oil painting in Florence,
              Italy and hasn’t stopped painting since. Living in Italy for a period of
              time and exploring Europe also enhanced her love of travel, and she
              always enjoys exploring new places.</p>
              <p>Kierra has two pets, a dog and a cat, but no pig (as of now).
              This is Kierra’s first children’s book.</p>
            </div>
          </div>
        </div>
        <img className="PeekingPigLeft" alt="Peeking Pig" src={pig3}/>
      </div>
    )
  }
}

export default Author
