import Web3 from 'web3'
import HotelJson from './HotelKamer.json'

export const OphalenBalans = async (vanAdres, web3) => {
  const balansWei = await web3.eth.getBalance(vanAdres)
  const balansEth = web3.utils.fromWei(balansWei, 'ether')
  return parseFloat(balansEth, 10)
}

export default class ApiEth {
  constructor(netwerk, account) {
    this.web3 = new Web3(netwerk.url)
    this.adres = account
    this.contractadres = netwerk.contractadres
  }

  GetAddressByAccountByNR = async (AccountNR) => {
    const accounts = await this.web3.eth.getAccounts()
    return accounts[AccountNR]
  }

  OphalenContractBalans = () => (
    OphalenBalans(this.contractadres, this.web3)
  )

  HotelKamer = () => (
    new this.web3.eth.Contract(HotelJson.abi, this.contractadres)
  )

  KamerOphalen = () => (
    this.HotelKamer().methods.kamer().call({ from: this.adres })
  )

  ZetPrijs = async (prijs) => {
    const prijsWei = this.web3.utils.toWei(prijs.toString())
    await this.HotelKamer().methods.ZetPrijs(prijsWei).send({ from: this.adres })
    return this.KamerOphalen()
  }

  ZetVrij = () => (
    this.HotelKamer().methods.ZetVrij().send({ from: this.adres })
  )

  ZetGeboekt = () => (
    this.HotelKamer().methods.ZetGeboekt().send({ from: this.adres })
  )

  ZetStatus = async (nieuweStatus) => {
    if (nieuweStatus === 0) await this.ZetVrij()
    if (nieuweStatus === 1) await this.ZetGeboekt()
    return this.KamerOphalen()
  }

  Uitbetaling = () => (
    this.HotelKamer().methods.Uitbetaling().send({ from: this.adres })
  )

  MaakBoeking = async (betaling) => {
    const betalingWei = this.web3.utils.toWei(betaling.toString())
    await this.HotelKamer().methods.MaakBoeking().send({ from: this.adres, value: betalingWei })
    return this.KamerOphalen()
  }
}
