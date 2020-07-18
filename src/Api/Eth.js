import Web3 from 'web3'
import { CstMetaMask } from '../Cst'

export default class Eth {
  Connect = async (url) => {
    // Local node ?
    if (url !== CstMetaMask) { this.web3 = new Web3(url); return }

    if (window.ethereum) {
      const web3MetaMask = new Web3(window.ethereum)
      try {
        // Request account access if needed
        const address = await window.ethereum.enable()
        console.log(address)
        this.web3 = web3MetaMask
      } catch (error) {
        console.error(error)
      }
    }
  }

  GetAddressByAccountByNR = async (AccountNR) => {
    const accounts = await this.web3.eth.getAccounts()
    return accounts[AccountNR]
  }

  OphalenBalans = async (vanAdres) => {
    const balansWei = await this.web3.eth.getBalance(vanAdres)
    const balansEth = Web3.utils.fromWei(balansWei, 'ether')
    return parseFloat(balansEth, 10)
  }

  OphalenContract = (abi, contractadres) => new this.web3.eth.Contract(abi, contractadres)

  OphalenAccounts = () => this.web3.eth.getAccounts()
}
