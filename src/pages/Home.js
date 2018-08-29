import React, { Component } from 'react'
import pigaboo_cover from '../images/Pigaboo_cover.jpeg'
import pig1 from '../images/pig1.jpeg'
import '../styles/App.css'

class Home extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-body">
          <div className="BookSummary">
            <div className="BookCover">
              <img className="BookCoverImage" alt="Book Cover" src={pigaboo_cover}/>
            </div>
            <div className="BookSummaryText">
              Embark on the adventures of Piper and Pig-A-Boo as they save Halloween from disaster and find a 
              lasting friendship along the way!<br /><br />
              Written and Illustrated by <b>Kierra Falbo</b>
            </div>
          </div>
          <img className="PeekingPig" alt="Peeking Pig" src={pig1}/>
        </div>
      </div>
    )
  }
}

export default Home
