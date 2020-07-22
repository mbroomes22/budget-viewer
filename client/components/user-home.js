import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import CurrencyConverter from './financials/currency-convert'
import BudgetDetails from './financials/budget-details'
import Stocks from './financials/stocks'
import Calculator from './financials/calculator'

/**
 * COMPONENT
 */
export const UserHome = props => {
  const {email} = props
  return (
    <div>
      <h3 className="header">Welcome, {email}</h3>
      <div className="home">
        <div className="home-option">
          <h3 className="card-elem">Travelling Soon?</h3> <br />
          <h4 className="card-elem">Currency Converter</h4>
          <br />
          <CurrencyConverter />
        </div>
        <div className="home-option">
          <h3 className="card-elem">Your Budget Summary</h3>
          <BudgetDetails />
        </div>
        <div className="home-option">
          <h3 className="card-elem">Want to Invest?</h3> <br />
          <h4 className="card-elem">U.S. Stock Market Info</h4>
          <br />
          <Stocks />
        </div>
        <div className="home-option">
          <h3 className="card-elem">Make Some Calculations</h3> <br />
          <h4 className="card-elem">Calculator</h4>
          <br />
          <Calculator />
        </div>
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
