import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { DefaultButton, TextField } from '@fluentui/react'

const textFieldStyles = { fieldGroup: { width: 150 } }

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

      <TextField
        onChange={nieuweBetaling}
        styles={textFieldStyles}
        label="Betaal"
        suffix="Eth"
      />

      <DefaultButton
        onClick={() => Boeken(Betaling)}
        text="BETALEN"
      />
    </React.Fragment>
  )
}

export default BoekingMaken

BoekingMaken.propTypes = {
  Boeken: PropTypes.func.isRequired,
}
