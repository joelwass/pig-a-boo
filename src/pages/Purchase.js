import React, { Component } from 'react'
import pigaboo_cover from '../images/Pigaboo_cover.jpeg'
import pig2 from '../images/pig2.jpeg'
import CheckoutForm from '../components/checkoutForm'
import {Elements, StripeProvider} from 'react-stripe-elements';
import '../styles/App.css'

class Purchase extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hardcover: true
    };
  }

  setHardcover = () => {
    this.setState({ hardcover: true })
  }

  setPaperback = () => {
    this.setState({ hardcover: false })
  }

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
            <input type="radio" id="hardcoverChoice" checked={this.state.hardcover} onChange={this.setHardcover}>
            </input><label htmlFor="hardcoverChoice">Hardcover $18.99</label><br/>
            <input type="radio" id="paperbackChoice" checked={!this.state.hardcover} onChange={this.setPaperback}>
            </input><label htmlFor="paperbackChoice">Paperback $12.99</label>
            <StripeProvider apiKey="pk_test_FMKCmt1o6kV5KQbkAkeB1cPB">
              <div className="example">
                <Elements>
                  <CheckoutForm hardcover={this.state.hardcover}/>
                </Elements>
              </div>
            </StripeProvider>
          </div>
        </div>
      </div>
    )
  }
}

export default Purchase
