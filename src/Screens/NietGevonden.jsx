/* eslint react/prop-types:off */
import React from 'react'
import { CstTekst } from '../Cst'

const NietGevonden = ({ match, location }) => (
  <div>
    <h2>
      {CstTekst.NietGevonden.Tekst}
    </h2>
    <div>
      {`Location:
      pathname = ${location.pathname}

 search=${location.search}

 hash=${location.hash}

 state=${location.state}
 `}
    </div>
    <br />
    <div>
      {`Match
    path=${match.path} 

    url=${match.url}

    params=${
  Object.keys(match.params).map((key) => (
    `${key} = ${match.params[key]}`
  ))
  }

    isExact=${match.isExact}
    `}
    </div>
  </div>
)

export default NietGevonden
