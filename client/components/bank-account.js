import React, {Component} from 'react'

export default class Account extends Component {
  render() {
    return (
      <div>
        <h1>Your Bank Account Details</h1>
        <div className="acct-choices">
          <div className="portal-card">
            <h3>View my Income</h3>
          </div>
          <div className="portal-card">
            <h3>View/set my budget</h3>
          </div>
          <div className="portal-card">
            <h3>View my spending</h3>
          </div>
        </div>
      </div>
    )
  }
}
