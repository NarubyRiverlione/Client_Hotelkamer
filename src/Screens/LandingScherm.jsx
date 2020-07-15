import React, { useState, useEffect } from 'react'
import { CstTekst, CstFouten } from '../Cst'

import { GetAddressByAccountByNR, KamerOphalen, ZetPrijs, GetBalans } from '../Api/ApiEth'

import KiesAccount from '../Components/KiesAccount'
import ToonKamer from '../Components/ToonKamer'
import PrijsAanpassen from '../Components/PrijsAanpassen'

const { LandingScherm: LandingTxt } = CstTekst

const LandingScherm = () => {
  const [address, setAddress] = useState()
  const [Balans, setBalans] = useState()
  const [Kamer, setKamer] = useState()
  const [Fout, setFout] = useState()

  useEffect(() => {
    AccountGekozen(0)
  }, [])

  const VerwerkFout = (fout) => {
    if (fout.message === CstFouten.GeenEigenaar) {
      setFout(CstFouten.EnkelDoorEigenaar)
      return
    }
    setFout(fout.message)
  }

  const AccountGekozen = async (accountNR) => {
    try {
      const newAddress = await GetAddressByAccountByNR(accountNR)
      setAddress(newAddress)
      const newBalans = await GetBalans(newAddress)
      setBalans(newBalans.toFixed(4))
      setFout()
    }
    catch (fout) {
      setFout(fout.message)
    }
  }

  const OphalenKamer = async () => {
    try {
      const KamerInfo = await KamerOphalen(address)
      setKamer(KamerInfo)
      setFout()
    }
    catch (fout) {
      setFout(fout.message)
    }
  }

  const AanpassenPrijs = async (prijs) => {
    try {
      console.log(`nieuwe prijs ${prijs}`)
      const updateKamer = await ZetPrijs(address, prijs)
      setKamer(updateKamer)
      setFout(null)
    }
    catch (fout) {
      VerwerkFout(fout)
    }
  }


  return (
    <React.Fragment>
      <h1>{LandingTxt.Titel}</h1>
      <hr />
      {Fout && (
        <h1 style={{ background: "red", color: "white" }}>{`Fout: ${Fout}`}</h1>
      )}
      <KiesAccount AccountGekozen={AccountGekozen} Balans={Balans} />
      <h2>{LandingTxt.VoorEidereen}</h2>
      <ToonKamer Kamer={Kamer} OphalenKamer={OphalenKamer} />
      <hr />

      <h2>{LandingTxt.EnkelContractEigenaar}</h2>
      <PrijsAanpassen Aanpassen={AanpassenPrijs} />

    </React.Fragment>
  )
}

export default LandingScherm
