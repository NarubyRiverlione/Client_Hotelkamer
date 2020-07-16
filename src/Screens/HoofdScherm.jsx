// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react'
import { CstTekst } from '../Cst'

import ApiEth from '../Api/ApiEth'
import VerwerkFout from '../Api/VerwerkFout'

// import KiesAccount from '../Components/KiesAccount'
import KiesNetwerk from '../Components/KiesNetwerk'
import ToonKamer from '../Components/ToonKamer'
import PrijsAanpassen from '../Components/PrijsAanpassen'
import StatusAanpassen from '../Components/StatusAanpassen'
import BalansContract from '../Components/BalansContract'
import Uitbetalen from '../Components/Uitbetalen'
import BoekingMaken from '../Components/BoekingMaken'
import OpenenDeur from '../Components/OpenenDeur'

const { HoofdScherm: Txt } = CstTekst

const HoofdScherm = () => {
  const [Netwerk, setNetwerk] = useState()
  const [Kamer, setKamer] = useState()
  const [Fout, setFout] = useState()
  const [ContractBalans, setContractBalans] = useState()

  const NetwerkGekozen = (netwerk, accountAdres) => {
    if (!netwerk || !accountAdres) {
      setNetwerk()
      return
    }
    setNetwerk(new ApiEth(netwerk, accountAdres))
  }

  const OphalenKamer = async () => {
    try {
      const KamerInfo = await Netwerk.KamerOphalen()
      setKamer(KamerInfo)
      setFout()
    } catch (fout) {
      setFout(fout.message)
    }
  }
  const AanpassenPrijs = async (prijs) => {
    try {
      const updateKamer = await Netwerk.ZetPrijs(prijs)
      setKamer(updateKamer)
      setFout()
    } catch (fout) {
      setFout(VerwerkFout(fout))
    }
  }
  const AanpassenStatus = async (nieuweStatus) => {
    try {
      const updateKamer = await Netwerk.ZetStatus(nieuweStatus)
      setKamer(updateKamer)
      setFout()
    } catch (fout) {
      setFout(VerwerkFout(fout))
    }
  }
  const ContractBalansOpvragen = async () => {
    try {
      const balans = await Netwerk.OphalenContractBalans()
      setContractBalans(balans.toFixed(4))
      setFout()
    } catch (fout) {
      setFout(VerwerkFout(fout))
    }
  }
  const BetaalUit = async () => {
    try {
      await Netwerk.Uitbetaling()
      await ContractBalansOpvragen()
      // TODO om nieuw saldo eigenaar te tonen
      // await AccountGekozen(0)
      setFout()
    } catch (fout) {
      setFout(VerwerkFout(fout))
    }
  }
  const Boeken = async (betaling) => {
    try {
      const kamer = await Netwerk.MaakBoeking(betaling)
      setKamer(kamer)
      setFout()
    } catch (fout) {
      setFout(VerwerkFout(fout))
    }
  }
  const DeurOpenen = async () => {
    try {
      const kamer = await Netwerk.KamerdeurOpenen()
      setKamer(kamer)
      setFout()
    } catch (fout) {
      setFout(VerwerkFout(fout))
    }
  }
  return (
    <React.Fragment>
      <h1>{Txt.Titel}</h1>
      <hr />
      {Fout && (
        <h1 style={{ background: 'red', color: 'white' }}>{`Fout: ${Fout}`}</h1>
      )}

      <KiesNetwerk NetwerkGekozen={NetwerkGekozen} />

      {Netwerk && (
        <div>
          <h2>{Txt.VoorEidereen}</h2>
          <ToonKamer Kamer={Kamer} OphalenKamer={OphalenKamer} />
          <br />
          <br />
          <BalansContract
            Balans={ContractBalans}
            Opvragen={ContractBalansOpvragen}
          />
          <br />
          <br />
          <BoekingMaken Boeken={Boeken} />
          <br />
          <br />
          <hr />

          <h2>{Txt.EnkelBoeker}</h2>
          <OpenenDeur DeurOpenen={DeurOpenen} />
          <br />
          <br />
          <hr />

          <h2>{Txt.EnkelContractEigenaar}</h2>
          <PrijsAanpassen Aanpassen={AanpassenPrijs} />
          <br />
          <br />
          <StatusAanpassen Aanpassen={AanpassenStatus} />
          <br />
          <br />
          <Uitbetalen
            BetaalUit={BetaalUit}
          />
        </div>
      )}
    </React.Fragment>
  )
}

export default HoofdScherm
