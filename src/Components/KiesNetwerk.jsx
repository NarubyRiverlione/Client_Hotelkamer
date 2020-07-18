import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Eth from '../Api/Eth'
import { CstNetwerken } from '../Cst'
import KiesAccount from './KiesAccount'

const KiesNetwerk = ({ NetwerkEnAccountGekozen, Balans }) => {
  const [Provider, setProvider] = useState()
  const [NetwerkNaam, setNetwerkNaam] = useState()
  const [Accounts, setAccounts] = useState()

  const KeuzeNetwerk = async (event) => {
    event.preventDefault()
    const { value } = event.target
    const Netwerk = CstNetwerken.find((netwerk) => netwerk.naam === value)
    const { url, naam } = Netwerk
    setNetwerkNaam(naam)
    if (!url) {
      // beveilig terug eerste dummy optie kiezen bij netwerken
      setAccounts()
      NetwerkEnAccountGekozen()
      return
    }
    const eth = new Eth()
    await eth.Connect(url)
    setProvider(eth)
    const accounts = await eth.OphalenAccounts()
    setAccounts(accounts)
  }

  return (
    <React.Fragment>
      <select onChange={KeuzeNetwerk}>
        <option value="">Kies netwerk</option>
        {CstNetwerken.map((netwerk) => (
          <option
            key={netwerk.naam}
            value={netwerk.naam}
          >
            {netwerk.naam}
          </option>
        ))}
      </select>
      {Accounts && (
        <KiesAccount
          Accounts={Accounts}
          AccountGekozen={(account) => { NetwerkEnAccountGekozen(NetwerkNaam, account, Provider) }}
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
