import React, { useState } from 'react'
import PropTypes from 'prop-types'


const PrijsAanpassen = ({ Aanpassen }) => {
  const [Prijs, setPrijs] = useState()

  const NieuwePrijs = (event) => {
    event.preventDefault()
    const { value } = event.target
    const prijs = parseFloat(value, 10)
    setPrijs(prijs)
  }
  return (
    <React.Fragment>
      Zet de prijs per dag op <input onChange={NieuwePrijs}></input> Eth.
      <button type="button" onClick={() => Aanpassen(Prijs)}>Aanpassen</button>
    </React.Fragment>
  )
}

export default PrijsAanpassen

PrijsAanpassen.propTypes = {
  Aanpassen: PropTypes.func.isRequired,
}