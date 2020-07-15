import React from 'react'
import { utils } from 'web3'
import PropTypes from 'prop-types'


const ToonStatus = (status) => {
  switch (status) {
    case '0': return 'Vrij'
    case '1': return 'Geboekt'
    case '2': return 'Onbeschikbaar'
    default: return 'ONBEKENDE STATUS'
  }
}

const ToonKamer = ({ Kamer, OphalenKamer }) => (
  <React.Fragment>
    <button type="button" onClick={OphalenKamer}>Toon kamer</button>
    <br />
    {Kamer && (
      <React.Fragment>
        <div>{`Prijs = ${utils.fromWei(Kamer.Prijs)} Eth / dag`}</div>
        <div>{`Status = ${ToonStatus(Kamer.Status)}`} </div>
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
  Kamer: null
}
