import React from 'react'
import PropTypes from 'prop-types'

const BalansContract = ({ Balans, Opvragen, BetaalUit }) => (
  <React.Fragment>
    Contract balans <button type="button" onClick={Opvragen}>opvragen</button>
    <br />
    {Balans && (
      <div>
        &nbsp;Contract bevat {Balans} Eth
        &nbsp;<button type="button" onClick={BetaalUit}>Betaal nu uit</button>
      </div>)}
  </React.Fragment>
)

export default BalansContract

BalansContract.propTypes = {
  Balans: PropTypes.number,
  Opvragen: PropTypes.func.isRequired,
  BetaalUit: PropTypes.func.isRequired,
}
BalansContract.defaultProps = {
  Balans: null
}