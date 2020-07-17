import Web3 from 'web3'

export default class Eth {
  constructor(url) {
    this.web3 = new Web3(url)
  }

  eGetAddressByAccountByNR = async (AccountNR) => {
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
