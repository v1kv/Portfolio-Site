import { useState, useEffect, useRef } from 'react'
import './Calculator.scss'

const Calculator = () => {
  const calculatorRef = useRef()

  const [displayValue, setDisplayValue] = useState('')
  const [symbolValue, setSymbolValue] = useState('')
  const [operator, setOperator] = useState(null)
  const [savedValue, setSavedValue] = useState('')

  const getNumber = (number) => {
    if (number === '.' && displayValue.includes('.')) {
      return
    }
    setDisplayValue((prevValue) =>
      prevValue === '0' ? String(number) : prevValue + number,
    )
  }

  const handleOperatorClick = (selectedOperator) => {
    if (operator !== null) {
      calculateResult()
    }

    setOperator(selectedOperator)
    setSavedValue(displayValue)
    setDisplayValue('')
  }

  const calculateResult = () => {
    const prevValue = parseFloat(savedValue)
    const nextValue = parseFloat(displayValue)

    if (operator === '+') {
      setDisplayValue(String(prevValue + nextValue))
    } else if (operator === '-') {
      setDisplayValue(String(prevValue - nextValue))
    } else if (operator === '*') {
      setDisplayValue(String(prevValue * nextValue))
    } else if (operator === '/') {
      setDisplayValue(String(prevValue / nextValue))
    }
  }

  const handleEqualClick = () => {
    calculateResult()
    setOperator(null)
  }

  const handleClearClick = () => {
    setDisplayValue('0')
    setOperator(null)
  }

  useEffect(() => {
    const calculat = calculatorRef.current
  }, [displayValue, symbolValue])
  return (
    <div className="calculator-wrapper">
      <div ref={calculatorRef} className="calculator">
        <div className="input-wrapper">
          <input value={displayValue} className="input" type="text" readOnly />
        </div>
        <div className="row">
          <div
            className="button"
            onClick={() => {
              getNumber(7)
            }}
          >
            7
          </div>
          <div
            className="button"
            onClick={() => {
              getNumber(8)
            }}
          >
            8
          </div>
          <div
            className="button"
            onClick={() => {
              getNumber(9)
            }}
          >
            9
          </div>
          <div
            className="button"
            onClick={() => {
              handleOperatorClick(`/`)
            }}
          >
            /
          </div>
        </div>
        <div className="row">
          <div
            className="button"
            onClick={() => {
              getNumber(4)
            }}
          >
            4
          </div>
          <div
            className="button"
            onClick={() => {
              getNumber(5)
            }}
          >
            5
          </div>
          <div
            className="button"
            onClick={() => {
              getNumber(6)
            }}
          >
            6
          </div>
          <div
            className="button"
            onClick={() => {
              handleOperatorClick(`*`)
            }}
          >
            *
          </div>
        </div>
        <div className="row">
          <div
            className="button"
            onClick={() => {
              getNumber(1)
            }}
          >
            1
          </div>
          <div
            className="button"
            onClick={() => {
              getNumber(2)
            }}
          >
            2
          </div>
          <div
            className="button"
            onClick={() => {
              getNumber(3)
            }}
          >
            3
          </div>
          <div
            className="button"
            onClick={() => {
              handleOperatorClick(`-`)
            }}
          >
            -
          </div>
        </div>
        <div className="row">
          <div
            className="button"
            onClick={() => {
              getNumber(0)
            }}
          >
            0
          </div>
          <div
            className="button"
            onClick={() => {
              getNumber(`.`)
            }}
          >
            .
          </div>
          <div
            className="button"
            onClick={() => {
              handleEqualClick()
            }}
          >
            =
          </div>
          <div
            className="button"
            onClick={() => {
              handleOperatorClick(`+`)
            }}
          >
            +
          </div>
          <div
            className="button"
            onClick={() => {
              handleClearClick()
            }}
          >
            Cleare
          </div>
        </div>
      </div>
    </div>
  )
}
export default Calculator
