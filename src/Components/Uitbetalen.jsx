import React from 'react'
import PropTypes from 'prop-types'

const Uitbetaling = ({ BetaalUit }) => (
  <React.Fragment>
    <button type="button" onClick={BetaalUit}>Betaal nu uit</button>
  </React.Fragment>
)

export default Uitbetaling

Uitbetaling.propTypes = {
  BetaalUit: PropTypes.func.isRequired,
}
