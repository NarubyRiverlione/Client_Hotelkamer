import React from 'react'
import PropTypes from 'prop-types'
import { CompoundButton } from '@fluentui/react'

const PauseerContract = ({ ContractPauze, ContractReset }) => (
  <React.Fragment>
    <CompoundButton
      secondaryText="Maak het onmogelijk om het contract te gebruiken"
      onClick={ContractPauze}
      text="PAUSE"
    />
&nbsp;&nbsp;
    <CompoundButton
      primary
      secondaryText="Reset het contract, maak het weer bruikbaar"
      onClick={ContractReset}
      text="R E S E T"
    />
  </React.Fragment>
)

export default PauseerContract

PauseerContract.propTypes = {
  ContractPauze: PropTypes.func.isRequired,
  ContractReset: PropTypes.func.isRequired,
}
