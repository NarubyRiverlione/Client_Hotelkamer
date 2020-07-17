import React from 'react'
import PropTypes from 'prop-types'

const BalansContract = ({ ContractBalans, Opvragen }) => (
  <React.Fragment>
    Contract balans
    &nbsp;
    <button type="button" onClick={Opvragen}>opvragen</button>
    <br />
    {ContractBalans && (
      <div>{`    Contract bevat ${ContractBalans.toFixed(4)} Eth`}</div>
    )}
  </React.Fragment>
)

export default BalansContract

BalansContract.propTypes = {
  ContractBalans: PropTypes.number,
  Opvragen: PropTypes.func.isRequired,
}
BalansContract.defaultProps = {
  ContractBalans: null,
}
