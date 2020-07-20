// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'
import { CstTekst } from '../Cst'

import ApiHotelKamer, { VerwerkFout } from '../Api/ApiHotelKamer'

import KiesNetwerk from '../Components/KiesNetwerk'
import ToonKamer from '../Components/ToonKamer'
import PrijsAanpassen from '../Components/PrijsAanpassen'
import StatusAanpassen from '../Components/StatusAanpassen'
import BalansContract from '../Components/BalansContract'
import Uitbetalen from '../Components/Uitbetalen'
import BoekingMaken from '../Components/BoekingMaken'
import OpenenDeur from '../Components/OpenenDeur'
import PauseerContract from '../Components/PauseerContract'

const { HoofdScherm: Txt } = CstTekst

const HoofdScherm = () => {
  const [Api, setApi] = useState()
  const [Balans, setBalans] = useState()
  const [Kamer, setKamer] = useState()
  const [Fout, setFout] = useState()
  const [WachtenOpBlock, setWachtenOpBlock] = useState()
  const [ContractBalans, setContractBalans] = useState()
  const [ToonDeelEigenaar, setToonDeelEigenaar] = useState()

  const NetwerkEnAccountGekozen = async (netwerkNaam, accountAdres, provider) => {
    // beveilig terug eerste dummy optie kiezen bij accounts
    if (!provider || !accountAdres) {
      setBalans()
      setApi()
      return
    }
    const api = new ApiHotelKamer(netwerkNaam, accountAdres, provider)
    const balans = await api.EigenBalansOphalen()
    setBalans(balans)
    setApi(api)
  }

  const OphalenKamer = async () => {
    try {
      const KamerInfo = await Api.KamerOphalen()
      setKamer(KamerInfo)
      setFout()
    } catch (fout) {
      setFout(fout.message)
    }
  }
  const ContractActie = async (actie) => {
    try {
      setWachtenOpBlock(true)
      await actie
      OphalenKamer()
      setFout()
      setWachtenOpBlock(false)
    } catch (fout) {
      setFout(VerwerkFout(fout))
      setWachtenOpBlock(false)
    }
  }

  const ContractBalansOpvragen = async () => {
    try {
      const balans = await Api.OphalenContractBalans()
      setContractBalans(balans)
      setFout()
    } catch (fout) {
      setFout(VerwerkFout(fout))
    }
  }
  const BetaalUit = async () => {
    try {
      setWachtenOpBlock(true)
      await Api.Uitbetaling()
      await ContractBalansOpvragen()
      const balans = await Api.EigenBalansOphalen()
      setBalans(balans)
      setFout()
      setWachtenOpBlock(false)
    } catch (fout) {
      setFout(VerwerkFout(fout))
      setWachtenOpBlock(false)
    }
  }
  const Boeking = async (betaling) => {
    await ContractActie(Api.MaakBoeking(betaling))
    const balans = await Api.EigenBalansOphalen()
    setBalans(balans)
  }

  return (
    <React.Fragment>
      <h1>{Txt.Titel}</h1>
      <hr />
      {Fout && (
        <h1 style={{ background: 'red', color: 'white', padding: '1rem' }}>{`Fout: ${Fout}`}</h1>
      )}
      {WachtenOpBlock && (
        <h4 style={{ background: 'green', color: 'white', padding: '1rem' }}>
          {Txt.WachtenOpBlok}
        </h4>
      )}
      <KiesNetwerk
        NetwerkEnAccountGekozen={NetwerkEnAccountGekozen}
        Balans={Balans}
      />

      {
        Balans && (
          <div>
            <h2>{Txt.VoorEidereen}</h2>
            <ToonKamer Kamer={Kamer} OphalenKamer={OphalenKamer} />
            <br />
            <br />
            <BalansContract
              ContractBalans={ContractBalans}
              Opvragen={ContractBalansOpvragen}
            />
            <br />
            <br />
            <BoekingMaken Boeken={Boeking} />
            <br />
            <br />
            <hr />

            <h2>{Txt.EnkelBoeker}</h2>
            <OpenenDeur DeurOpenen={() => { ContractActie(Api.KamerdeurOpenen()) }} />
            <br />
            <br />
            <hr />
            <h2>
              {Txt.EnkelContractEigenaar}
              &nbsp;&nbsp;
              <button type="button" onClick={() => setToonDeelEigenaar(!ToonDeelEigenaar)}>
                {ToonDeelEigenaar ? 'Verberg deel' : 'Toon deel'}
              </button>
            </h2>
            {ToonDeelEigenaar && (
              <div>
                <PrijsAanpassen Aanpassen={(prijs) => { ContractActie(Api.ZetPrijs(prijs)) }} />
                <br />
                <br />
                <StatusAanpassen Aanpassen={(nieuweStatus) => { ContractActie(Api.ZetStatus(nieuweStatus)) }} />
                <br />
                <br />
                <Uitbetalen BetaalUit={BetaalUit} />
                <br />
                <br />
                <PauseerContract
                  ContractPauze={() => ContractActie(Api.ContractPauze())}
                  ContractReset={() => ContractActie(Api.Reset())}
                />
              </div>
            )}
          </div>
        )
      }
    </React.Fragment>
  )
}

export default HoofdScherm
