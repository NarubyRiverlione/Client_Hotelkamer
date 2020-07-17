// import Web3 from 'web3'
import { Utils } from 'web3-utils'
import HotelJson from './HotelKamer.json'
import { CstNetwerken, CstFouten } from '../Cst'
import Eth from './Eth'

export const VerwerkFout = (fout) => {
  switch (fout.message) {
    case CstFouten.GeenEigenaar:
      return (CstFouten.EnkelDoorEigenaar)
    case CstFouten.NietVrij:
      return (CstFouten.KamerIsNietVrij)
    case CstFouten.IsGeenBoeker:
      return CstFouten.EnkelDoorBoeker
    case CstFouten.BeschikbareDagenOpgebruikt:
      return CstFouten.GeenBeschikbareDagen
    default:
      return (fout.message)
  }
}

const VindContract = (url) => CstNetwerken.find((netwerk) => netwerk.url === url).contractadres

export default class ApiHotelKamer {
  constructor(netwerkUrl, account) {
    this.EthProvider = new Eth(netwerkUrl)
    this.adres = account
    this.contractadres = VindContract(netwerkUrl)
    this.HotelKamer = this.EthProvider.OphalenContract(HotelJson.abi, this.contractadres)
  }

  EigenBalansOphalen = () => (
    this.EthProvider.OphalenBalans(this.adres)
  )

  OphalenContractBalans = () => (
    this.EthProvider.OphalenBalans(this.contractadres)
  )

  KamerOphalen = () => (
    this.HotelKamer.methods.kamer().call({ from: this.adres })
  )

  ZetPrijs = async (prijs) => {
    const prijsWei = Utils.toWei(prijs.toString())
    await this.HotelKamer.methods.ZetPrijs(prijsWei).send({ from: this.adres })
  }

  ZetVrij = () => (
    this.HotelKamer.methods.ZetVrij().send({ from: this.adres })
  )

  ZetGeboekt = () => (
    this.HotelKamer.methods.ZetGeboekt().send({ from: this.adres })
  )

  ZetStatus = async (nieuweStatus) => {
    if (nieuweStatus === 0) await this.ZetVrij()
    if (nieuweStatus === 1) await this.ZetGeboekt()
    return this.KamerOphalen()
  }

  Uitbetaling = () => (
    this.HotelKamer.methods.Uitbetaling().send({ from: this.adres })
  )

  MaakBoeking = async (betaling) => {
    const betalingWei = Utils.toWei(betaling.toString())
    await this.HotelKamer.methods.MaakBoeking().send({ from: this.adres, value: betalingWei })
  }

  KamerdeurOpenen = async () => {
    await this.HotelKamer.methods.OpenDeur().send({ from: this.adres })
  }
}
