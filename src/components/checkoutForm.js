import React, {Component} from 'react'
import {Redirect} from 'react-router-dom'
import {CardElement, injectStripe} from 'react-stripe-elements'
const ENDPOINT = 'https://pigaboo.herokuapp.com'
//'http://localhost:9000'

class CheckoutForm extends Component {
  constructor(props) {
    super(props)
    this.submit = this.submit.bind(this)
    this.state = {
      michiganAddress: false,
      loading: false,
      redirect: false,
      name: '',
      streetAddress: '',
      email: '',
      city: '',
      addressState: '',
      zip: ''
    }
  }

  async submit(ev) {
    this.setState({ loading: true })
    const options = {
      name: this.state.name,
      address_country: 'United States',
      address_zip: this.state.zip,
      address_state: this.state.addressState,
      address_city: this.state.city,
      address_line1: this.state.streetAddress
    }
    let token
    try {
      let res = await this.props.stripe.createToken(options)
      token = res.token
    } catch (e) {
      console.log(e)
      this.setState({ redirectError: true, loading: false })
      return
    }

    if (!token) {
      return
    }
    token.email = this.state.email;
    const bodyObject = {
      token, 
      hardcover: this.props.hardcover,
      quantity: this.props.quantity,
      michiganAddress: this.state.michiganAddress
    }
    try {
      let response = await fetch(`${ENDPOINT}/charge`, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(bodyObject)
      })
      if (response.ok) {
        console.log("Purchase Complete!")
        this.setState({ redirectSuccess: true, loading: false })
      } else {
        this.setState({ redirectError: true, loading: false })
      }
    } catch (e) {
      this.setState({ redirectError: true, loading: false })
    }
  }

  updateName = (e) => {
    this.setState({ name: e.target.value })
  }

  updateEmail = (e) => {
    this.setState({ email: e.target.value })
  }

  updateStreet = (e) => {
    this.setState({ streetAddress: e.target.value })
  }

  updateCity = (e) => {
    this.setState({ city: e.target.value })
  }

  updateState = (e) => {
    const state = e.target.value
    if (state.toLowerCase().includes('michigan') || state.includes('MI')) {
      this.setState({ addressState: state, michiganAddress: true })
    } else {
      this.setState({ addressState: state, michiganAddress: false })
    }
  }

  updateZip = (e) => {
    this.setState({ zip: e.target.value })
  }

  render() {
    const {redirectError, redirectSuccess, loading, michiganAddress} = this.state

    if (redirectError) {
      return <Redirect to='/error'/>
    } else if (redirectSuccess) {
      return <Redirect to='/success'/>
    }
    return (
      <div className="checkout">
        <h3>Shipping info</h3>
        <p style={{fontSize: 14}}>Shipping is $4 (+$1 per additional book)</p>
        { michiganAddress && <p style={{fontSize: 14}}>A 6% Sales tax will be imposed on Michigan recipients</p>}
        <div><input type="text" className="largeCheckout" id="nameInput" placeholder="Full name" onChange={this.updateName}></input></div>
        <div><input type="text" className="largeCheckout" id="emailInput" placeholder="Email" onChange={this.updateEmail}></input></div>
        <div><input type="text" className="largeCheckout" id="streetAddressInput" placeholder="Street address" onChange={this.updateStreet}></input></div>
        <div>
        <input type="text" className="smallCheckout" id="cityInput" placeholder="City" onChange={this.updateCity}></input>
        <input type="text" className="smallCheckout" id="stateInput" placeholder="State (WA)" onChange={this.updateState}></input>
        <input type="text" className="smallCheckout" id="zipInput" placeholder="Zip" onChange={this.updateZip}></input>
        </div>
        <CardElement />
        { loading && <h2>Loading...</h2>}
        <button className="checkoutButton" onClick={this.submit}>Buy</button>
      </div>
    )
  }
}

export default injectStripe(CheckoutForm)