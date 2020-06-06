import React, {Component} from 'react'
import {Link} from 'react-router-dom'

export default class Account extends Component {
  render() {
    return (
      <div>
        <h1 className="header">Your Bank Account Details</h1>
        <div className="acct-choices">
          <Link to="/income">
            <div className="portal-card">
              <h3>View my Income</h3>
              <img src="https://i.imgur.com/IyIFC5w.gif" />
              <h5>Click to enter</h5>
            </div>
          </Link>
          <Link to="/budget">
            <div className="portal-card">
              <h3>View/set my budget</h3>
              <img src="https://cache.lovethispic.com/uploaded_images/174217-Beautiful-Waterfall-Gif.gif" />
              <h5>Click to enter</h5>
            </div>
          </Link>
          <Link to="/spending">
            <div className="portal-card">
              <h3>View my spending</h3>
              <img src="https://media.giphy.com/media/2csuIJj6TmuKA/source.gif" />
              <h5>Click to enter</h5>
            </div>
          </Link>
        </div>
      </div>
    )
  }
}
