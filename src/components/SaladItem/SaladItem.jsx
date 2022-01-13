import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { MoleculeIcon } from '../MoleculeIcon/MoleculeIcon'
import { removeMolecule } from '../../redux/moleculeSlice'
import './SaladItem.css'
import { useEffect, useState } from 'react'

export const SaladItem = ({ salad }) => {
  const molecules = useSelector((state) => state.molecules.result)
  const dispatch = useDispatch()
  const [isActive, setIsActive] = useState(true)

  useEffect(() => {
    salad.composition.map((m) => {
      molecules.forEach((molecule) => {
        if (molecule._id === m && molecule.qty < 1) {
          setIsActive(false)
        }
      })
    })
  }, [salad.composition, molecules])

  const handleClick = () => {
    if (isActive) {
      salad.composition?.forEach((molecule) =>
        dispatch(removeMolecule({ _id: molecule }))
      )
    }
  }

  return (
    <article
      className={`salad-item ${isActive ? '' : 'salad-item_disabled'}`}
      onClick={handleClick}
    >
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
