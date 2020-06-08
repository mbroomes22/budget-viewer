import React, {Component} from 'react'
import {Link} from 'react-router-dom'

export default class Spending extends Component {
  constructor() {
    super()
    this.state = {
      display: ''
    }
    this.counter = this.counter.bind(this)
  }

  counter() {
    let countDownDate = new Date('June 31, 2020 15:30:00').getTime()

    const countdownfunction = setInterval(() => {
      let rightNow = new Date().getTime()
      let difference = countDownDate - rightNow
      const days = Math.floor(difference / (1000 * 60 * 60 * 24))
      const hours = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      )
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
      const seconds = Math.floor((difference % (1000 * 60)) / 1000)

      if (difference < 0) {
        clearInterval(countdownfunction)
        this.setState({display: 'EXPIRED'})
      }

      this.setState({
        display: `${days}d ${hours}h ${minutes}m ${seconds}s`
      })
    }, 1000)
  }

  render() {
    this.counter()
    return (
      <div>
        <h2>Spending</h2>
        <h3>
          Enter a new dimension to visualize your spending and see where your
          money's really going
        </h3>
        <div className="middle">
          <h1>COMING SOON</h1>
          <hr />
          <p id="countdown">{this.state.display}</p>
          <p>
            Return to <Link to="/account">Account Details</Link>
          </p>
        </div>
      </div>
    )
  }
}
