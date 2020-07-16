import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Web3 from 'web3'
import { OphalenBalans } from '../Api/ApiEth'

import { CstNetwerken } from '../Cst'
import KiesAccount from './KiesAccount'

const api = (url) => new Web3(url)

const KiesNetwerk = ({ NetwerkGekozen }) => {
  const [Netwerk, setNetwerk] = useState()
  const [Accounts, setAccounts] = useState()
  const [Balans, setBalans] = useState()

  const Keuze = async (event) => {
    event.preventDefault()
    const { value } = event.target
    if (!value) {
      // beveilig terug eerste dummy optie kiezen bij netwerken
      setNetwerk()
      setAccounts()
      setBalans()
      NetwerkGekozen()
      return
    }

    const netwerk = CstNetwerken.find((net) => net.naam === value)
    setNetwerk(netwerk)

    const accounts = await api(netwerk.url).eth.getAccounts()
    setAccounts(accounts)
  }

  const AccountGekozen = async (accountAdres) => {
    // beveilig terug eerste dummy optie kiezen bij accounts
    if (!accountAdres) {
      setBalans()
      NetwerkGekozen()
      return
    }
    const balans = await OphalenBalans(accountAdres, api(Netwerk.url))
    setBalans(balans)
    NetwerkGekozen(Netwerk, accountAdres)
  }

  return (
    <React.Fragment>
      <select onChange={Keuze}>
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
          AccountGekozen={AccountGekozen}
          Balans={Balans}
        />
      )}
    </React.Fragment>
  )
}

export default KiesNetwerk

KiesNetwerk.propTypes = {
  NetwerkGekozen: PropTypes.func.isRequired,
}
