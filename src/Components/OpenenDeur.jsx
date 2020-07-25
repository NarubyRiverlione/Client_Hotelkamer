import React from 'react'
import PropTypes from 'prop-types'
import { CompoundButton } from '@fluentui/react'

const OpenenDeur = ({ DeurOpenen }) => (
  <React.Fragment>
    <CompoundButton
      secondaryText="De deur openen verbruikt een geboekte dag"
      onClick={DeurOpenen}
      text="Openen"
    />
  </React.Fragment>
)
export default OpenenDeur

OpenenDeur.propTypes = {
  DeurOpenen: PropTypes.func.isRequired,
}
