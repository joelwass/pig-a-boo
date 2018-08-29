import React, { Component } from 'react'
import pigaboo_cover from '../images/Pigaboo_cover.jpeg'
import pig2 from '../images/pig2.jpeg'
import '../styles/App.css'

class Purchase extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-body">
          <h3>Purchase Pig-A-Boo!</h3>
          <div className="BookSummary">
            <div className="BookCoverPurchase">
              <img className="BookCoverImage" alt="Book Cover" src={pigaboo_cover}/>
            </div>
          </div>
          <img className="PeekingPigBottom" alt="Peeking Pig" src={pig2}/>
          <div className="PurchaseLinks">
            <p>Link to purchase on amazon</p>
            <p>Link to purchase on Barnes and Nobles</p>
          </div>
        </div>
      </div>
    )
  }
}

export default Purchase
