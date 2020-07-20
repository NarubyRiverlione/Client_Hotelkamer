/* eslint {max-len:off} */

export const CstTekst = {
  Foutmeldingen: {
    ApiOnbereikbaar: 'Er kunnen geen gegevens opgehaald worden. Controleer de internetverbinding.',
  },
  HoofdScherm: {
    Titel: 'Hotelkamer Smartcontract',
    AccountKeuze: 'Gebruik',
    VoorEidereen: 'Beschikbaar voor iedereen',
    EnkelContractEigenaar: 'Enkel contract eigenaar',
    EnkelBoeker: 'Enkel voor de boeker',
    WachtenOpBlok: 'Wachten totdat de transactie in een blok is opgenomen',
  },
  NietGevonden: {
    Tekst: 'De pagina is niet gevonden',
  },
  OnbekendeFout: 'Onbekende fout',
}

export const CstFouten = {
  EthGeenEigenaar: 'Returned error: VM Exception while processing transaction: revert Ownable: caller is not the owner',
  EnkelDoorEigenaar: 'Mag enkel uitgevoerd worden door de contract eigenaar',
  EthNietVrij: 'Returned error: VM Exception while processing transaction: revert Kamer is niet vrij',
  KamerIsNietVrij: 'Kan niet boeken omdat de kamer niet vrij is',
  EthIsGeenBoeker: 'Returned error: VM Exception while processing transaction: revert Enkel de boeker mag deze actie doen',
  EnkelDoorBoeker: 'Enkel de boeker kan deze actie doen',
  EthBeschikbareDagenOpgebruikt: 'Returned error: VM Exception while processing transaction: revert Alle geboekte dagen zijn opgebruikt',
  GeenBeschikbareDagen: 'Alle geboekte dagen zijn opgebruikt',
  EthGepauzeerd: 'Returned error: VM Exception while processing transaction: revert Pausable: paused',
  OpPause: 'Het smart contract is op onbruikbaar gezet door de eigenaar',
}

export const CstMetaMask = 'metamask'

export const CstNetwerken = [
  {
    naam: 'Ganache',
    contractadres:
      '0x18A94a73c9103666F33dF8e52eC2d0c9EE9BE47f',
    //  '0x83F22DaDb34c517181dD197ea177C8ed61040945',
    // '0x2831351452E4D72DfF056ebd90e4B813CCc21D8B',
    // '0xDD7BE38555885146BF8D7D17C6556150B6A23817',
    // '0xCF47d9Eb9bDde7C27B60cFb62def60e7213341B6',
    // '0xB0f060c8be1C73A6C78942B1CeEc626F2318F25F',
    url: 'ws://127.0.0.1:7545',
  },
  {
    naam: 'Rinkeby',
    contractadres:
      '0x4cF397e7e5680A82b57E39a29a07A9aa02B0B352',
    url: CstMetaMask,
  },
  {
    naam: 'Ganache via Metamask',
    contractadres:
      '0x83F22DaDb34c517181dD197ea177C8ed61040945',
    url: CstMetaMask,
  },

]
