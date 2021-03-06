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
      zip: '',
      fieldValidation: false
    }
  }

  async submit(ev) {
    this.setState({ fieldValidation: false })
    if (!this.state.streetAddress || 
      !this.state.city || 
      !this.state.addressState || 
      !this.state.zip ||
      !this.state.name ||
      !this.state.email) {
        this.setState({ fieldValidation: true })
        return
    }
    this.setState({ loading: true })
    const options = {
      name: this.state.name,
      email: this.state.email,
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
      email: this.state.email,
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
    this.setState({ fieldValidation: false, name: e.target.value })
  }

  updateEmail = (e) => {
    this.setState({ fieldValidation: false, email: e.target.value })
  }

  updateStreet = (e) => {
    this.setState({ fieldValidation: false, streetAddress: e.target.value })
  }

  updateCity = (e) => {
    this.setState({ fieldValidation: false, city: e.target.value })
  }

  updateState = (e) => {
    const state = e.target.value
    if (state.toLowerCase().includes('michigan') || state.includes('MI')) {
      this.setState({ fieldValidation: false, addressState: state, michiganAddress: true })
    } else {
      this.setState({ fieldValidation: false, addressState: state, michiganAddress: false })
    }
  }

  updateZip = (e) => {
    this.setState({ fieldValidation: false, zip: e.target.value })
  }

  render() {
    const {
      redirectError, 
      redirectSuccess, 
      loading, 
      michiganAddress,
      fieldValidation
    } = this.state

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
        { fieldValidation && <div class="validationError">
          <p>All fields are required</p>
        </div>}
        <div><input type="text" className="largeCheckout" id="nameInput" placeholder="Full name" onChange={this.updateName}></input></div>
        <div><input type="text" className="largeCheckout" id="emailInput" placeholder="Email" onChange={this.updateEmail}></input></div>
        <div><input type="text" className="largeCheckout" id="streetAddressInput" placeholder="Street address" onChange={this.updateStreet}></input></div>
        <div>
          <input type="text" className="smallCheckout" id="cityInput" placeholder="City" onChange={this.updateCity}></input>
          <input type="text" className="smallCheckout" id="stateInput" placeholder="State (WA)" onChange={this.updateState}></input>
          <input type="text" className="smallCheckout" id="zipInput" placeholder="Zip" onChange={this.updateZip}></input>
        </div>
        <CardElement hidePostalCode={true}/>
        { loading && <h2>Loading...</h2>}
        { !loading && <button className="checkoutButton" onClick={this.submit}>Buy</button>}
      </div>
    )
  }
}

export default injectStripe(CheckoutForm)