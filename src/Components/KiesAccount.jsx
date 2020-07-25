import React from 'react'
import PropTypes from 'prop-types'
import { Dropdown } from '@fluentui/react'
import { CstTekst } from '../Cst'

const { HoofdScherm: LandingTxt } = CstTekst

const dropdownStyles = { dropdown: { width: 400 } }

const KiesAccount = ({ Accounts, AccountGekozen, Balans }) => {
  const AccountKeuzeOpties = Accounts.map((account, index) => ({
    key: account,
    text: `${index}. ${account}`,
  }))

  const onChange = (event, item) => {
    AccountGekozen(item.key)
  }

  return (
    <React.Fragment>
      <h4>
        <Dropdown
          label={LandingTxt.AccountKeuze}
          onChange={onChange}
          placeholder="Kies account"
          options={AccountKeuzeOpties}
          styles={dropdownStyles}
        />

    &nbsp;&nbsp;
        {Balans && (<span>{`Balans: ${Balans.toFixed(4)} Eth`}</span>)}

      </h4>
    </React.Fragment>
  )
}

export default KiesAccount

KiesAccount.propTypes = {
  Accounts: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  AccountGekozen: PropTypes.func.isRequired,
  Balans: PropTypes.number,
}

KiesAccount.defaultProps = {
  Balans: null,
}
