import Web3 from 'web3'
import HotelJson from './HotelKamer.json'

const web3 = new Web3('ws://localhost:7545')

export const GetAddressByAccountByNR = async (AccountNR) => {
  const accounts = await web3.eth.getAccounts()
  return accounts[AccountNR]
}

const HotelKamer = () => {
  const ContractAddress = '0xB0f060c8be1C73A6C78942B1CeEc626F2318F25F'
  return new web3.eth.Contract(HotelJson.abi, ContractAddress)
}


export const KamerOphalen = async (address) => {
  const Hotel = HotelKamer()
  const Kamer = await Hotel.methods.kamer().call({ from: address })
  return Kamer
}

export const ZetPrijs = async (address, prijs) => {
  const prijsWei = web3.utils.toWei(prijs.toString())
  const Hotel = HotelKamer()
  await Hotel.methods.ZetPrijs(prijsWei).send({ from: address })
  return await KamerOphalen(address)
}
