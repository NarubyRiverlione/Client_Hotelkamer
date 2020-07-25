import React from 'react'
import PropTypes from 'prop-types'
import { DefaultButton } from '@fluentui/react'

const BalansContract = ({ ContractBalans, Opvragen }) => (
  <React.Fragment>
    <DefaultButton onClick={Opvragen} text="Contract balans" />
    <br />
    {ContractBalans === 0 && (<div>Contract bevat geen Eth</div>)}
    {ContractBalans && (
      <div>{`Contract bevat ${ContractBalans.toFixed(4)} Eth`}</div>
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
