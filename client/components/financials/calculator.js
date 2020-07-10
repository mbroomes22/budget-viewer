import React, {Component} from 'react'

export default class Calculator extends Component {
  constructor() {
    super()
    this.state = {
      equation: '',
      result: 0
    }
  }

  onClick = event => {
    let equation = this.state.equation
    const pressedButton = event.target.innerHTML
    if ((pressedButton >= '0' && pressedButton <= '9') || pressedButton === '.')
      equation += pressedButton
    else if (['+', '-', '*', '/', '%'].indexOf(pressedButton) !== -1)
      equation += ' ' + pressedButton + ' '
    else if (pressedButton === '=') {
      try {
        const evalResult = eval(equation)
        const result = Number.isInteger(evalResult)
          ? evalResult
          : evalResult.toFixed(2)
        this.setState({result})
      } catch (error) {
        alert('Invalid Mathematical Equation')
      }
    } else {
      equation = equation.trim()
      equation = equation.substr(0, equation.length - 1)
    }

    this.setState({equation: equation})
  }

  clear = evt => {
    evt.preventDefault()
    this.setState({equation: '', result: 0})
  }

  render() {
    return (
      <main className="calculator">
        <section className="screen">
          <div className="result-screen">{this.state.result}</div>
          <div className="computation-screen">{this.state.equation}</div>
        </section>
        <section className="keypad">
          <div className="keypad-row">
            <button type="button" onClick={this.clear} className="btn primary">
              C
            </button>
            <button
              type="button"
              onClick={this.onClick}
              className="btn primary"
            >
              &larr;
            </button>
            <button
              type="button"
              onClick={this.onClick}
              className="btn operator"
            >
              %
            </button>
            <button
              type="button"
              onClick={this.onClick}
              className="btn operator"
            >
              /
            </button>
          </div>
          <div className="keypad-row">
            <button type="button" onClick={this.onClick} className="btn">
              9
            </button>
            <button type="button" onClick={this.onClick} className="btn">
              8
            </button>
            <button type="button" onClick={this.onClick} className="btn">
              7
            </button>
            <button
              type="button"
              onClick={this.onClick}
              className="btn operator"
            >
              *
            </button>
          </div>
          <div className="keypad-row">
            <button type="button" onClick={this.onClick} className="btn">
              6
            </button>
            <button type="button" onClick={this.onClick} className="btn">
              5
            </button>
            <button type="button" onClick={this.onClick} className="btn">
              4
            </button>
            <button
              type="button"
              onClick={this.onClick}
              className="btn operator"
            >
              -
            </button>
          </div>
          <div className="keypad-row">
            <button type="button" onClick={this.onClick} className="btn">
              3
            </button>
            <button type="button" onClick={this.onClick} className="btn">
              2
            </button>
            <button type="button" onClick={this.onClick} className="btn">
              1
            </button>
            <button
              type="button"
              onClick={this.onClick}
              className="btn operator"
            >
              +
            </button>
          </div>
          <div className="keypad-row">
            <button type="button" onClick={this.onClick} className="btn">
              0
            </button>
            <button type="button" onClick={this.onClick} className="btn">
              .
            </button>
            <button type="button" onClick={this.onClick} className="btn-large">
              =
            </button>
            {/* <button type="button" className="btn"></button> */}
          </div>
        </section>
      </main>
    )
  }
}
