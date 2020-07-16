import React from 'react'
import PropTypes from 'prop-types'
import { CstTekst } from '../Cst'

const { LandingScherm: LandingTxt } = CstTekst

const KiesAccount = ({ Accounts, AccountGekozen, Balans }) => {
  const Keuze = (event) => {
    event.preventDefault()
    const { value } = event.target
    AccountGekozen(value)
  }

  return (
    <React.Fragment>
      <h4>
        {LandingTxt.AccountKeuze}
        &nbsp;&nbsp;
        <select onChange={Keuze}>
          <option value="">Kies account</option>
          {Accounts.map((account, index) => (
            <option key={account} value={account}>{`${index}. ${account}`}</option>
          ))}
        </select>
        &nbsp;&nbsp;
        {Balans && (<span>{`Balans: ${Balans} Eth`}</span>)}
      </h4>
    </React.Fragment>
  )
}

export default KiesAccount

KiesAccount.propTypes = {
  Accounts: PropTypes.arrayOf(
    PropTypes.shape({
      naam: PropTypes.string.isRequired,
      contractadres: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    }),
  ).isRequired,
  AccountGekozen: PropTypes.func.isRequired,
  Balans: PropTypes.number,
}

KiesAccount.defaultProps = {
  Balans: null,
}
