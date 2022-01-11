import { useSelector } from 'react-redux'
import { MoleculeIcon } from '../MoleculeIcon/MoleculeIcon'
import './SaladItem.css'

export const SaladItem = ({ salad }) => {
  const molecules = useSelector((state) => state.molecules.result)

  return (
    <article className="salad-item">
      <h3 className="salad-item__title">{salad.title}</h3>
      {salad.composition?.map((molecule) => {
        const [currentMolecule] = molecules.filter((m) => m._id === molecule)
        return (
          <MoleculeIcon
            key={currentMolecule._id}
            title={currentMolecule.title}
            image={currentMolecule.image}
          />
        )
      })}
    </article>
  )
}
