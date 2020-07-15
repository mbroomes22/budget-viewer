import React, {Component} from 'react'

export default class Income extends Component {
  constructor() {
    super()
    this.state = {
      income: 0,
      incomeSelect: false,
      display: ''
    }
  }

  editIncome = evt => {
    evt.preventDefault()
    this.setState({
      incomeSelect: !this.state.incomeSelect
    })
  }

  setIncome = evt => {
    evt.preventDefault()
    this.setState({
      income: evt.target.value
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
            Income
          </button>
        </div>
        <div className="modal" style={{display: this.state.display}}>
          <div className="modal-content">
            <span className="close" onClick={this.closeModal}>
              &times;
            </span>
            <h4>
              Income:{' '}
              <span className="goal-sctn">${this.state.income}/month</span>
            </h4>
            <button
              type="button"
              className="home-action"
              onClick={this.editIncome}
            >
              Set New Income
            </button>{' '}
            {this.state.incomeSelect ? (
              <>
                <br />
                <input
                  className="field"
                  placeholder="your monthly income"
                  onChange={this.setIncome}
                />
                <button type="submit" className="home-action">
                  Update
                </button>
              </>
            ) : null}
          </div>
        </div>
      </>
    )
  }
}
