import React, {Component} from 'react'
import Tabs from './tabs'

export default class Spending extends Component {
  constructor(props) {
    super(props)
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
            <Tabs>
              <div label="This Week" id="gator">
                Your finances from the past week. <br />
                <br />
                <img
                  src="https://spark.adobe.com/sprout/api/images/978c76de-15ac-4f1f-8a13-55cda19813e0"
                  className="tab-image"
                />
              </div>
              <div label="This Month" className="month">
                Your finances from the past month. <br />
                <br />
                <img
                  src="https://i1.wp.com/offbeathome.com/files/2014/06/Zero-Based-Budgeting-pie-chart.png?fit=660%2C408&ssl=1"
                  className="tab-image"
                />
              </div>
              <div label="This Year">
                Your finances from the past year. <br />
                <br />
                <img
                  src="https://my.trsretire.com/retiretrack/sites/default/files/images/piechart.jpg"
                  className="tab-image"
                />
              </div>
            </Tabs>
            <span className="close" onClick={this.closeModal}>
              &times;
            </span>
          </div>
        </div>
      </>
    )
  }
}
