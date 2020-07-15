import React from 'react'
import PropTypes from 'prop-types'
import { CstTekst } from '../Cst'

const { LandingScherm: LandingTxt } = CstTekst


const KiesAccount = ({ AccountGekozen }) => {
  const Keuze = (event) => {
    event.preventDefault()
    const { value } = event.target
    const accountNR = parseInt(value, 10)
    AccountGekozen(accountNR)
  }
  return (
    <React.Fragment>
      <h4>
        {LandingTxt.AccountKeuze}
      &nbsp;&nbsp;
      <select onChange={Keuze}>
          <option value={0}>Account 0</option>
          <option value={1}>Account 1</option>
          <option value={2}>Account 2</option>
          <option value={3}>Account 3</option>
          <option value={4}>Account 4</option>
          <option value={5}>Account 5</option>
        </select>
      </h4>
    </React.Fragment>
  )
}

export default KiesAccount

KiesAccount.propTypes = {
  AccountGekozen: PropTypes.func.isRequired,
}
