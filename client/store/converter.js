import axios from 'axios'
require('../../secrets')

const GET_MONEY = 'GET_MONEY'

const getMoney = currency => ({
  type: GET_MONEY,
  currency
})

export const fetchCurrency = (amt, startCurr, endCurr) => async dispatch => {
  try {
    const apiKey = process.env.CURRENCY_API_KEY
    //https://free.currencyconverterapi.com/
    //https://www.currencyconverterapi.com/docs/sample-code/nodejs
    let requestString = `https://free.currconv.com/api/v7/convert?q=${startCurr}_${endCurr}&compact=ultra&apiKey=${apiKey}`
    const returnReq = await axios.get(requestString)
    dispatch(getMoney(returnReq.data))
  } catch (error) {
    console.error(error)
  }
}

const initialState = {
  currency: 0
}

export default function converterReducer(state = initialState, action) {
  switch (action.type) {
    case GET_MONEY:
      return {
        ...state,
        currency: action.currency
      }
    default:
      return {
        ...state
      }
  }
}
