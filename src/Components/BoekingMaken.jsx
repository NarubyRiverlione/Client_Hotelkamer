import React, { useState } from 'react'
import PropTypes from 'prop-types'

const BoekingMaken = ({ Boeken }) => {
  const [Betaling, setBetaling] = useState()

  const nieuweBetaling = (event) => {
    event.preventDefault()
    const { value } = event.target
    const prijs = parseFloat(value, 10)
    setBetaling(prijs)
  }
  return (
    <React.Fragment>
      Betaal
      &nbsp;
      <input onChange={nieuweBetaling} />
      &nbsp;
      Eth voor een boeking &nbsp; &nbsp;
      <button type="button" onClick={() => Boeken(Betaling)}>BETALEN</button>
    </React.Fragment>
  )
}

export default BoekingMaken

BoekingMaken.propTypes = {
  Boeken: PropTypes.func.isRequired,
}
