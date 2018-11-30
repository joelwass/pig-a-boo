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
      hardcover: true,
      quantity: 1
    };
  }

  setHardcover = () => {
    this.setState({ hardcover: true })
  }

  setPaperback = () => {
    this.setState({ hardcover: false })
  }

  add = () => {
    this.setState({ quantity: this.state.quantity + 1 })
  }

  subtract = () => {
    if (this.state.quantity !== 1) {
      this.setState({ quantity: this.state.quantity - 1 })
    }
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
            </input><label htmlFor="paperbackChoice">Paperback $12.99</label><br/>
            <div class="quantity-row">QUANTITY:
              <button class="minus" onClick={this.subtract}> - </button><p class="quantity"> { this.state.quantity } </p>
              <button class="plus" onClick={this.add}> + </button>
            </div>
            <StripeProvider apiKey="pk_live_XHj6P5or8P0dCAITIwMNtNYi">
              <div className="example">
                <Elements>
                  <CheckoutForm hardcover={this.state.hardcover} quantity={this.state.quantity}/>
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
