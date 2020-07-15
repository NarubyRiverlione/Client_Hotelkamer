import Web3 from 'web3'
import HotelJson from './HotelKamer.json'

const web3 = new Web3('ws://localhost:7545')

export const GetAddressByAccountByNR = async (AccountNR) => {
  const accounts = await web3.eth.getAccounts()
  return accounts[AccountNR]
}

export const GetBalans = async (address) => {
  const balansWei = await web3.eth.getBalance(address)
  const balansEth = web3.utils.fromWei(balansWei, 'ether')
  return parseFloat(balansEth, 10)
}

const HotelKamer = () => {
  const ContractAddress = '0xB0f060c8be1C73A6C78942B1CeEc626F2318F25F'
  return new web3.eth.Contract(HotelJson.abi, ContractAddress)
}


export const KamerOphalen = async (address) => (
  await HotelKamer().methods.kamer().call({ from: address })
)

export const ZetPrijs = async (address, prijs) => {
  const prijsWei = web3.utils.toWei(prijs.toString())
  await HotelKamer().methods.ZetPrijs(prijsWei).send({ from: address })
  return await KamerOphalen(address)
}

export const ZetStatus = async (address, nieuweStatus) => {
  if (nieuweStatus === 0) await ZetVrij(address)
  if (nieuweStatus === 1) await ZetGeboekt(address)
  return await KamerOphalen(address)
}

const ZetVrij = async (address) => (
  await HotelKamer().methods.ZetVrij().send({ from: address })
)

const ZetGeboekt = async (address) => (
  await HotelKamer().methods.ZetGeboekt().send({ from: address })
)