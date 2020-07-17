import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Eth from '../Api/Eth'
import { CstNetwerken } from '../Cst'
import KiesAccount from './KiesAccount'

const KiesNetwerk = ({ NetwerkEnAccountGekozen, Balans }) => {
  const [NetwerkUrl, setNetwerkUrl] = useState()
  const [Accounts, setAccounts] = useState()

  const KeuzeNetwerk = async (event) => {
    event.preventDefault()
    const { value: url } = event.target
    if (!url) {
      // beveilig terug eerste dummy optie kiezen bij netwerken
      setNetwerkUrl()
      setAccounts()
      return
    }
    setNetwerkUrl(url)
    const accounts = await new Eth(url).OphalenAccounts()
    setAccounts(accounts)
  }

  return (
    <React.Fragment>
      <select onChange={KeuzeNetwerk}>
        <option value="">Kies netwerk</option>
        {CstNetwerken.map((netwerk) => (
          <option
            key={netwerk.naam}
            value={netwerk.url}
          >
            {netwerk.naam}
          </option>
        ))}
      </select>
      {Accounts && (
        <KiesAccount
          Accounts={Accounts}
          AccountGekozen={(account) => { NetwerkEnAccountGekozen(NetwerkUrl, account) }}
          Balans={Balans}
        />
      )}
    </React.Fragment>
  )
}

export default KiesNetwerk

KiesNetwerk.propTypes = {
  NetwerkEnAccountGekozen: PropTypes.func.isRequired,
  Balans: PropTypes.number,
}
KiesNetwerk.defaultProps = {
  Balans: null,
}
