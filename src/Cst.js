/* eslint {max-len:off} */
export const CstFoutAPIOnbereikbaar = 'Network Error'
export const CstApi = {
  ProdUrlBase: 'https://XXXXXXXXX.azurewebsites.net/', // Azure Functions
  DevUrlBase: 'http://localhost:7071/', // Azure Functions, lokaal debug

  UrlAPIBase: 'api/', // Azure Functions

  Fout: 'Fout bij api',
}

export const CstRoutes = {
  basename: '', // basename moet een leading slash hebben
  siteName: '/',
}

export const CstTekst = {
  Foutmeldingen: {
    ApiOnbereikbaar: 'Er kunnen geen gegevens opgehaald worden. Controleer de internetverbinding.',
  },
  LandingScherm: {
    Titel: 'Hotelkamer Smartcontract',
    AccountKeuze: 'Gebruik',
    VoorEidereen: 'Beschikbaar voor iedereen',
    EnkelContractEigenaar: 'Enkel contract eigenaar'
  },
  NietGevonden: {
    Tekst: 'De pagina is niet gevonden',
  },
  OnbekendeFout: 'Onbekende fout',
}

export const CstFouten = {
  GeenEigenaar: 'Returned error: VM Exception while processing transaction: revert Ownable: caller is not the owner',
  EnkelDoorEigenaar: 'Mag enkel uitgevoerd worden door de contract eigenaar'
}

export const ContractAddress = '0xB0f060c8be1C73A6C78942B1CeEc626F2318F25F'
