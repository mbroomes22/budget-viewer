import React, {Component} from 'react'

export default class Calculator extends Component {
  render() {
    return (
      <main className="calculator">
        <section className="screen">
          <div className="result-screen">3124</div>
          <div className="computation-screen">3000 + 100 + 20 + 4</div>
        </section>
        <section className="keypad">
          <div className="keypad-row">row</div>
          <div className="keypad-row">row</div>
          <div className="keypad-row">row</div>
          <div className="keypad-row">row</div>
          <div className="keypad-row">row</div>
        </section>
      </main>
    )
  }
}
