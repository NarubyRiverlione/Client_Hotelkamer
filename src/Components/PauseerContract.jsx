import React from 'react'
import PropTypes from 'prop-types'

const PauseerContract = ({ ContractPauze, ContractReset }) => (
  <React.Fragment>
    Maak het onmogelijk om het contract te gebruiken
    &nbsp;&nbsp;
    <button type="button" onClick={ContractPauze}>PAUSE</button>
    <br />
    <br />
    Reset het contract, maak het weer bruikbaar
    &nbsp;&nbsp;
    <button type="button" onClick={ContractReset}>R E S E T</button>
    <br />
    <br />
  </React.Fragment>
)

export default PauseerContract

PauseerContract.propTypes = {
  ContractPauze: PropTypes.func.isRequired,
  ContractReset: PropTypes.func.isRequired,
}
