import React, { Component } from 'react'
import pig3 from '../images/pig3.jpeg'
import '../styles/App.css'

class Author extends Component {
  render() {
    return (
      <div>
        <div className="Author">
          Kierra Falbo is an artist, sculpture, mathematician, biomedical engineer, and author.
          She has no shortage of talents, and has recently embarked on writing this childrens 
          short story. She enjoys traveling, painting, and helping save kids from fires. 
          She does it all. She's a legend.
        </div>
        <img className="PeekingPigLeft" alt="Peeking Pig" src={pig3}/>
      </div>
    )
  }
}

export default Author
