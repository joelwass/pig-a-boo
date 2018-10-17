import React, {Component} from 'react'
import {CardElement, injectStripe} from 'react-stripe-elements'
const ENDPOINT = process.env.NODE_ENV === 'production' ? 'https://pigaboo.herokuapp.com/' : 'http://localhost:9000/'

class CheckoutForm extends Component {
  constructor(props) {
    super(props)
    this.submit = this.submit.bind(this)
    this.state = {
      name: '',
      streetAddress: '',
      email: '',
      city: '',
      addressState: '',
      zip: ''
    }
  }

  async submit(ev) {
    const options = {
      name: this.state.name,
      address_country: 'United States',
      address_zip: this.state.zip,
      address_state: this.state.addressState,
      address_city: this.state.city,
      address_line1: this.state.streetAddress
    }
    let { token } = await this.props.stripe.createToken(options)
    token.email = this.state.email;
    let response = await fetch(`${ENDPOINT}charge`, {
      method: "POST",
      headers: {"Content-Type": "text/plain"},
      body: {
        token, 
        hardcover: this.props.hardcover,
      }
    })

    if (response.ok) console.log("Purchase Complete!")
  }

  updateName = (e) => {
    this.setState({ name: e.value })
  }

  updateEmail = (e) => {
    this.setState({ email: e.value })
  }

  updateStreet = (e) => {
    this.setState({ streetAddress: e.value })
  }

  updateCity = (e) => {
    this.setState({ city: e.value })
  }

  updateState = (e) => {
    this.setState({ addressState: e.value })
  }

  updateZip = (e) => {
    this.setState({ zip: e.value })
  }

  render() {
    return (
      <div className="checkout">
        <h3>Shipping info</h3>
        <div><input type="text" class="largeCheckout" id="nameInput" placeholder="Full name" onChange={this.updateName}></input></div>
        <div><input type="text" class="largeCheckout" id="emailInput" placeholder="Email" onChange={this.updateEmail}></input></div>
        <div><input type="text" class="largeCheckout" id="streetAddressInput" placeholder="Street address" onChange={this.updateStreet}></input></div>
        <div>
        <input type="text" class="smallCheckout" id="cityInput" placeholder="City" onChange={this.updateCity}></input>
        <input type="text" class="smallCheckout" id="stateInput" placeholder="State (WA)" onChange={this.updateState}></input>
        <input type="text" class="smallCheckout" id="zipInput" placeholder="Zip" onChange={this.updateZip}></input>
        </div>
        <CardElement />
        <button className="checkoutButton" onClick={this.submit}>Buy</button>
      </div>
    )
  }
}

export default injectStripe(CheckoutForm)