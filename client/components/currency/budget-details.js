import React, {Component} from 'react'

export default class BudgetDetails extends Component {
  constructor() {
    super()
    this.state = {
      goals: {Travel: 2000, 'Redesign bedroom': 600, Condo: 300000},
      income: 0,
      incomeSelect: false
    }
  }

  editIncome = evt => {
    evt.preventDefault()
    this.setState({
      incomeSelect: !this.state.incomeSelect
    })
  }

  render() {
    console.log('State Goals=>', this.state.goals)
    let goalSent = ''
    for (let [key, value] of Object.entries(this.state.goals)) {
      goalSent += `${key} - $${value}, `
    }
    console.log('GOAL SENTENCE', goalSent)
    return (
      <div>
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
        <h4>
          Income: <span className="goal-sctn">${this.state.income}/month</span>
        </h4>
        <button type="button" className="home-action" onClick={this.editIncome}>
          Set New Income
        </button>{' '}
        {this.state.incomeSelect ? (
          <>
            <br />
            <input className="field" placeholder="your monthly income" />
            <button type="submit" className="home-action">
              Update
            </button>
          </>
        ) : null}
        <h4>Spending:</h4>
        <div className="spend-time">
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
    )
  }
}
