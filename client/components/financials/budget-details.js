import React, {Component} from 'react'
import FinancialGoals from './budget-info/goals'
import Income from './budget-info/income'
import Spending from './budget-info/spending'

export default class BudgetDetails extends Component {
  render() {
    return (
      <div>
        <br />
        <br />
        <br />
        <FinancialGoals />
        <br />
        <br />
        <br />
        <Income />
        <br />
        <br />
        <br />
        <Spending />
      </div>
    )
  }
}
