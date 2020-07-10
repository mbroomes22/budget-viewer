import React, {Component} from 'react'

export default class Spending extends Component {
  constructor() {
    super()
    this.state = {
      display: ''
    }
  }

  editIncome = evt => {
    evt.preventDefault()
    this.setState({
      incomeSelect: !this.state.incomeSelect
    })
  }

  setGoals = evt => {
    evt.preventDefault()
    this.setState({
      display: 'block'
    })
  }

  closeModal = evt => {
    evt.preventDefault()
    this.setState({
      display: 'none'
    })
  }

  render() {
    return (
      <>
        <div className="spend-time">
          <button type="button" className="home-action" onClick={this.setGoals}>
            Spending
          </button>
        </div>
        <div className="modal" style={{display: this.state.display}}>
          <div className="spend-time modal-content">
            <span className="close" onClick={this.closeModal}>
              &times;
            </span>
            <button type="button" className="home-action">
              This Week
            </button>
            <button type="button" className="home-action">
              This Month
            </button>
            <button type="button" className="home-action">
              This Year
            </button>
          </div>
        </div>
      </>
    )
  }
}
