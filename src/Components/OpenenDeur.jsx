import React from 'react'
import PropTypes from 'prop-types'

const OpenenDeur = ({ DeurOpenen }) => (
  <React.Fragment>
    De deur openen verbruikt een geboekte dag
    &nbsp;&nbsp;
    <button type="button" onClick={DeurOpenen}>Openen</button>
  </React.Fragment>
)
export default OpenenDeur

OpenenDeur.propTypes = {
  DeurOpenen: PropTypes.func.isRequired,
}
