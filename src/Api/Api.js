/* eslint camelcase: "off" */
import axios from 'axios'

import { CstApi, CstFoutAPIOnbereikbaar, CstTekst } from '../Cst'

// url van api veranderen bij dev of productie
// npm run start => dev
// npm run build => prod
const UrlBase = process.env.NODE_ENV === 'production' ? CstApi.ProdUrlBase : CstApi.DevUrlBase
const CompleteUrl = (url) => UrlBase + CstApi.UrlAPIBase + url

export const GetData = (url) => (
  new Promise((resolve, reject) => {
    const GetUrl = CompleteUrl(url)
    axios.get(GetUrl, {
      headers: { 'x-functions-key': process.env.REACT_APP_FUNCTIONKEY },
    })
      .then((result) => resolve(result.data))
      .catch((err) => {
        // als de api niet kan bereikt worden,
        // toon dan een gebruiksvriendelijke foutmelding
        if (err.message === CstFoutAPIOnbereikbaar) {
          return reject(new Error(CstTekst.Foutmeldingen.ApiOnbereikbaar))
        }
        return reject(err)
      })
  })
)

export const PostData = (url, data) => (
  new Promise((resolve, reject) => {
    const PostUrl = CompleteUrl(url)

    axios.post(PostUrl, data, {
      headers: { 'x-functions-key': process.env.REACT_APP_FUNCTIONKEY },
    })
      .then((result) => resolve(result.data))
      .catch((err) => {
        console.error(err.message)
        if (err.response.data) {
          console.error(err.response.data)
        }
        // als de api niet kan bereikt worden,
        // toon dan een gebruiksvriendelijke foutmelding
        if (err.message === CstFoutAPIOnbereikbaar) {
          return reject(new Error(CstTekst.Foutmeldingen.ApiOnbereikbaar))
        }
        return reject(err)
      })
  })
)
