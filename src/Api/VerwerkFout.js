import { CstFouten } from '../Cst'

const VerwerkFout = (fout) => {
  switch (fout.message) {
    case CstFouten.GeenEigenaar:
      return (CstFouten.EnkelDoorEigenaar)
    case CstFouten.NietVrij:
      return (CstFouten.KamerIsNietVrij)
    case CstFouten.IsGeenBoeker:
      return CstFouten.EnkelDoorBoeker
    case CstFouten.BeschikbareDagenOpgebruikt:
      return CstFouten.GeenBeschikbareDagen
    default:
      return (fout.message)
  }
}

export default VerwerkFout
