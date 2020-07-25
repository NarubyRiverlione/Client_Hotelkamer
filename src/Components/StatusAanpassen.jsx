import React from 'react'
import PropTypes from 'prop-types'
import { DefaultButton } from '@fluentui/react'

const StatusAanpassen = ({ Aanpassen }) => (
  <React.Fragment>
    Zet kamer op
    {' '}
    <DefaultButton onClick={() => Aanpassen(0)} text="Vrij" />
&nbsp;&nbsp;
    <DefaultButton onClick={() => Aanpassen(1)} text="Geboekt" />

  </React.Fragment>
)

export default StatusAanpassen

StatusAanpassen.propTypes = {
  Aanpassen: PropTypes.func.isRequired,
}
