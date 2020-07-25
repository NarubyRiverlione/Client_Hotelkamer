import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { DefaultButton, TextField } from '@fluentui/react'

const textFieldStyles = { fieldGroup: { width: 150 } }

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
      <TextField label="Zet de prijs per dag op" suffix="Eth" onChange={NieuwePrijs} styles={textFieldStyles} />
      <DefaultButton onClick={() => Aanpassen(Prijs)} text="Aanpassen" />
    </React.Fragment>
  )
}

export default PrijsAanpassen

PrijsAanpassen.propTypes = {
  Aanpassen: PropTypes.func.isRequired,
}
