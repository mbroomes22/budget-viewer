import React, {Component} from 'react'

export default class FinancialGoals extends Component {
  constructor(props) {
    super(props)
    this.state = {
      goals: {Travel: 2000, 'Redesign bedroom': 600, Condo: 300000},
      display: ''
    }
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
    let goalSent = ''
    for (let [key, value] of Object.entries(this.state.goals)) {
      goalSent += `${key} - $${value} | `
    }
    return (
      <>
        <div className="spend-time">
          <button type="button" className="home-action" onClick={this.setGoals}>
            Financial Goals
          </button>
        </div>
        <div className="modal" style={{display: this.state.display}}>
          <div className="modal-content">
            <span className="close" onClick={this.closeModal}>
              &times;
            </span>
            <h4>Goals: </h4>
            <p className="goal-sctn">{goalSent}</p>
            <div className="goal-btns">
              <button type="button" className="home-action">
                Set a Goal
              </button>
              <button type="button" className="home-action">
                Edit Goals
              </button>
            </div>
          </div>
        </div>
      </>
    )
  }
}
