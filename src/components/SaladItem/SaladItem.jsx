import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { MoleculeIcon } from '../MoleculeIcon/MoleculeIcon'
import { removeMolecule } from '../../redux/moleculeSlice'
import { addToOrder } from '../../redux/orderSlice'
import './SaladItem.css'
import { useEffect, useState } from 'react'

export const SaladItem = ({ salad }) => {
  const molecules = useSelector((state) => state.molecules.result)
  const dispatch = useDispatch()
  const [isActive, setIsActive] = useState(true)

  useEffect(() => {
    salad.composition.forEach((m) => {
      molecules.forEach((molecule) => {
        if (molecule._id === m && molecule.qty < 1) {
          setIsActive(false)
        }
      })
    })
  }, [salad.composition, molecules])

  const handleClick = () => {
    if (isActive) {
      salad.composition?.forEach((molecule) => {
        dispatch(removeMolecule({ _id: molecule }))
        dispatch(addToOrder({ _id: molecule }))
      })
    }
  }

  return (
    <article className={`salad-item ${isActive ? '' : 'salad-item_disabled'}`}>
      <h3 className="salad-item__title">{salad.title}</h3>
      <ul className="icons">
        {salad.composition?.map((molecule) => {
          const [currentMolecule] = molecules.filter((m) => m._id === molecule)
          return (
            <li className="icons__item">
              <MoleculeIcon
                key={currentMolecule._id}
                title={currentMolecule.title}
                image={currentMolecule.image}
              />
            </li>
          )
        })}
      </ul>
      <button onClick={handleClick} className="salad-item__button">
        add to order
      </button>
      <p className="salad-item__available">
        {isActive ? '' : 'not enough molecules'}
      </p>
    </article>
  )
}
