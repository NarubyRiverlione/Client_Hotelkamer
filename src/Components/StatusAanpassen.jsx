import React from 'react'
import PropTypes from 'prop-types'

const StatusAanpassen = ({ Aanpassen }) => {

  return (
    <React.Fragment>
      Zet kamer op <button type="button" onClick={() => Aanpassen(0)}>Vrij</button>&nbsp;&nbsp;<button type="button" onClick={() => Aanpassen(1)}>Geboekt</button>
    </React.Fragment>
  )
}

export default StatusAanpassen

StatusAanpassen.propTypes = {
  Aanpassen: PropTypes.func.isRequired,
}