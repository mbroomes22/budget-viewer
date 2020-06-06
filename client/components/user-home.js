import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import CurrencyConverter from './currency/currency-convert'
import BudgetDetails from './currency/budget-details'
import Stocks from './currency/stocks'

/**
 * COMPONENT
 */
export const UserHome = props => {
  const {email} = props
  return (
    <div>
      <h3 className="header">Welcome, {email}</h3>
      <div className="home-option">
        <h3 className="card-elem">Travelling Soon?</h3> <br />
        <h4 className="card-elem">Currency Converter</h4>
        <br />
        <CurrencyConverter />
      </div>
      <div className="home-option">
        <h3 className="card-elem">Your Budget Summary</h3> <br />
        <h4 className="card-elem">Currency Converter</h4>
        <br />
        <BudgetDetails />
      </div>
      <div className="home-option">
        <h3 className="card-elem">Want to Invest?</h3> <br />
        <h4 className="card-elem">Currency Converter</h4>
        <br />
        <Stocks />
      </div>
    </div>
  )
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    email: state.user.email
  }
}

export default connect(mapState)(UserHome)

/**
 * PROP TYPES
 */
UserHome.propTypes = {
  email: PropTypes.string
}
