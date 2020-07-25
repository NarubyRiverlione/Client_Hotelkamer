import React from 'react'
import PropTypes from 'prop-types'
import { DefaultButton } from '@fluentui/react'

const Uitbetaling = ({ BetaalUit }) => (
  <React.Fragment>
    <DefaultButton onClick={BetaalUit} text="Betaal nu uit" />
  </React.Fragment>
)

export default Uitbetaling

Uitbetaling.propTypes = {
  BetaalUit: PropTypes.func.isRequired,
}
