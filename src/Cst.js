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
  },
  NietGevonden: {
    Tekst: 'De pagina is niet gevonden',
  },
  OnbekendeFout: 'Onbekende fout',
}

export const CstFouten = {
  GeenEigenaar: 'Returned error: VM Exception while processing transaction: revert Ownable: caller is not the owner',
  EnkelDoorEigenaar: 'Mag enkel uitgevoerd worden door de contract eigenaar',
  NietVrij: 'Returned error: VM Exception while processing transaction: revert Kamer is niet vrij',
  KamerIsNietVrij: 'Kan niet boeken omdat de kamer niet vrij is',
  IsGeenBoeker: 'Returned error: VM Exception while processing transaction: revert Enkel de boeker mag deze actie doen',
  EnkelDoorBoeker: 'Enkel de boeker kan deze actie doen',
  BeschikbareDagenOpgebruikt: 'Returned error: VM Exception while processing transaction: revert Alle geboekte dagen zijn opgebruikt',
  GeenBeschikbareDagen: 'Alle geboekte dagen zijn opgebruikt',
}

export const CstNetwerken = [
  {
    naam: 'Ganache',
    contractadres: '0xB0f060c8be1C73A6C78942B1CeEc626F2318F25F',
    url: 'ws://127.0.0.1:7545',
  },
]
