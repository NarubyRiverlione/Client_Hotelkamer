import Web3 from 'web3'
import HotelJson from './HotelKamer.json'
import { ContractAddress } from '../Cst'

const web3 = new Web3('ws://localhost:7545')

export const GetAddressByAccountByNR = async (AccountNR) => {
  const accounts = await web3.eth.getAccounts()
  return accounts[AccountNR]
}

export const OphalenBalans = async (address) => {
  const balansWei = await web3.eth.getBalance(address)
  const balansEth = web3.utils.fromWei(balansWei, 'ether')
  return parseFloat(balansEth, 10)
}

const HotelKamer = () => (
  new web3.eth.Contract(HotelJson.abi, ContractAddress)
)

export const KamerOphalen = (address) => (
  HotelKamer().methods.kamer().call({ from: address })
)

export const ZetPrijs = async (address, prijs) => {
  const prijsWei = web3.utils.toWei(prijs.toString())
  await HotelKamer().methods.ZetPrijs(prijsWei).send({ from: address })
  return KamerOphalen(address)
}

const ZetVrij = (address) => (
  HotelKamer().methods.ZetVrij().send({ from: address })
)

const ZetGeboekt = (address) => (
  HotelKamer().methods.ZetGeboekt().send({ from: address })
)

export const ZetStatus = async (address, nieuweStatus) => {
  if (nieuweStatus === 0) await ZetVrij(address)
  if (nieuweStatus === 1) await ZetGeboekt(address)
  return KamerOphalen(address)
}

export const Uitbetaling = (address) => (
  HotelKamer().methods.Uitbetaling().send({ from: address })
)

export const MaakBoeking = async (address, betaling) => {
  const betalingWei = web3.utils.toWei(betaling.toString())
  await HotelKamer().methods.MaakBoeking().send({ from: address, value: betalingWei })
  return KamerOphalen(address)
}
