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
          <div className="keypad-row">
            <button type="button" className="btn">
              C
            </button>
            <button type="button" className="btn">
              &larr;
            </button>
            <button type="button" className="btn">
              %
            </button>
            <button type="button" className="btn">
              /
            </button>
          </div>
          <div className="keypad-row">
            <button type="button" className="btn">
              9
            </button>
            <button type="button" className="btn">
              8
            </button>
            <button type="button" className="btn">
              7
            </button>
            <button type="button" className="btn">
              *
            </button>
          </div>
          <div className="keypad-row">
            <button type="button" className="btn">
              6
            </button>
            <button type="button" className="btn">
              5
            </button>
            <button type="button" className="btn">
              4
            </button>
            <button type="button" className="btn">
              -
            </button>
          </div>
          <div className="keypad-row">
            <button type="button" className="btn">
              3
            </button>
            <button type="button" className="btn">
              2
            </button>
            <button type="button" className="btn">
              1
            </button>
            <button type="button" className="btn">
              +
            </button>
          </div>
          <div className="keypad-row">
            <button type="button" className="btn">
              0
            </button>
            <button type="button" className="btn">
              .
            </button>
            <button type="button" className="btn-large">
              =
            </button>
            {/* <button type="button" className="btn"></button> */}
          </div>
        </section>
      </main>
    )
  }
}
