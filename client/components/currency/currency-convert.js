import React, {Component} from 'react'
import {connect} from 'react-redux'
import {fetchCurrency} from '../../store/converter'

export class CurrencyConverter extends Component {
  render() {
    return (
      <div>
        <p className="money">0 US Dollars</p>
        <input className="field" />
        <select className="currencies field">
          <option value="0">United States Dollar</option>
          <option value="1">Euro</option>
          <option value="2">Egyptian Pound</option>
          <option value="3">Pound Sterling</option>
          <option value="4">Canadian Dollar</option>
          <option value="5">Chinese Yuan</option>
          <option value="6">Colombian Peso</option>
          <option value="7">Costa Rican Colón</option>
          <option value="8">Brazilian Real</option>
          <option value="9">South African Rand</option>
          <option value="10">Moroccan Dirham</option>
          <option value="11">Indian Rupee</option>
          <option value="12">Turkish Lira</option>
        </select>

        <p className="money">equals 0 Euros</p>
        <input className="field" value="0" readOnly />
        <select className="currencies field">
          <option value="0">Euro</option>
          <option value="1">United States Dollar</option>
          <option value="2">Egyptian Pound</option>
          <option value="3">Pound Sterling</option>
          <option value="4">Canadian Dollar</option>
          <option value="5">Chinese Yuan</option>
          <option value="6">Colombian Peso</option>
          <option value="7">Costa Rican Colón</option>
          <option value="8">Brazilian Real</option>
          <option value="9">South African Rand</option>
          <option value="10">Moroccan Dirham</option>
          <option value="11">Indian Rupee</option>
          <option value="12">Turkish Lira</option>
        </select>
        <button type="submit" className="home-action">
          Convert
        </button>
      </div>
    )
  }
}

const mapState = state => ({
  currency: state.currency
})

const mapDispatch = dispatch => ({
  getMoney: (amt, startCurr, endCurr) =>
    dispatch(fetchCurrency(amt, startCurr, endCurr))
})

export default connect(mapState, mapDispatch)(CurrencyConverter)
