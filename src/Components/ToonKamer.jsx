import React from 'react'
import { DefaultButton } from '@fluentui/react'
import { utils } from 'web3'
import PropTypes from 'prop-types'

const ToonKamer = ({ Kamer, OphalenKamer }) => (
  <React.Fragment>
    <DefaultButton onClick={OphalenKamer} text="Toon kamer" />
    <br />
    {Kamer && (
      <React.Fragment>
        <div>{`Prijs = ${utils.fromWei(Kamer.Prijs)} Eth / dag`}</div>
        <div>{`Beschikbaar = ${Kamer.Beschikbaar}`}</div>
        <div>{`Aantal dagen geboekt = ${Kamer.AantalGeboekteDagen} dagen`}</div>
        <div>{`Boeker = ${Kamer.Boeker}`}</div>
      </React.Fragment>
    )}
  </React.Fragment>
)

export default ToonKamer

ToonKamer.propTypes = {
  Kamer: PropTypes.object,
  OphalenKamer: PropTypes.func.isRequired,
}
ToonKamer.defaultProps = {
  Kamer: null,
}
