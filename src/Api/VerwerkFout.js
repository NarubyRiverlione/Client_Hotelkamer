import { CstFouten } from '../Cst'

const VerwerkFout = (fout) => {
  switch (fout.message) {
    case CstFouten.GeenEigenaar:
      return (CstFouten.EnkelDoorEigenaar)
    case CstFouten.NietVrij:
      return (CstFouten.KamerIsNietVrij)
    default:
      return (fout.message)
  }
}

export default VerwerkFout
