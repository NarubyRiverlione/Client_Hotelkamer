import React from 'react'
import PropTypes from 'prop-types'

const BalansContract = ({ Balans, Opvragen }) => (
  <React.Fragment>
    Contract balans
    &nbsp;
    <button type="button" onClick={Opvragen}>opvragen</button>
    <br />
    {Balans && (
      <div>{`    Contract bevat ${Balans} Eth`}</div>
    )}
  </React.Fragment>
)

export default BalansContract

BalansContract.propTypes = {
  Balans: PropTypes.number,
  Opvragen: PropTypes.func.isRequired,
}
BalansContract.defaultProps = {
  Balans: null,
}
