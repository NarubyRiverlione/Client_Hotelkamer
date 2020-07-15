import React, { useState, useEffect } from 'react'
import { CstTekst, CstFouten } from '../Cst'

import { GetAddressByAccountByNR, KamerOphalen, ZetPrijs } from '../Api/ApiEth'

import KiesAccount from '../Components/KiesAccount'
import ToonKamer from '../Components/ToonKamer'
import PrijsAanpassen from '../Components/PrijsAanpassen'

const { LandingScherm: LandingTxt } = CstTekst

const LandingScherm = () => {
  const [address, setAddress] = useState(null)
  const [Kamer, setKamer] = useState(null)
  const [Fout, setFout] = useState(null)

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
    const newAddress = await GetAddressByAccountByNR(accountNR)
    setAddress(newAddress)
  }

  const OphalenKamer = async () => {
    try {
      const KamerInfo = await KamerOphalen(address)
      setKamer(KamerInfo)
      setFout(null)
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
      <KiesAccount AccountGekozen={AccountGekozen} />
      <h2>{LandingTxt.VoorEidereen}</h2>
      <ToonKamer Kamer={Kamer} OphalenKamer={OphalenKamer} />
      <hr />

      <h2>{LandingTxt.EnkelContractEigenaar}</h2>
      <PrijsAanpassen Aanpassen={AanpassenPrijs} />

    </React.Fragment>
  )
}

export default LandingScherm
