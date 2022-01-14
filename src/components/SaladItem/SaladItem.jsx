import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { MoleculeIcon } from '../MoleculeIcon/MoleculeIcon'
import { removeMolecule } from '../../redux/moleculeSlice'
import { addToOrder } from '../../redux/orderSlice'
import './SaladItem.css'
import { useEffect, useState } from 'react'
import { clearSalad } from '../../redux/customSaladSlice'

export const SaladItem = ({ salad, className }) => {
  const molecules = useSelector((state) => state.molecules.result)
  const dispatch = useDispatch()
  const [isActive, setIsActive] = useState(true)

  useEffect(() => {
    if (salad.composition.length < 1) {
      setIsActive(false)
    } else {
      setIsActive(true)
    }
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
        dispatch(addToOrder(molecules.find((m) => m._id === molecule)))
        dispatch(clearSalad())
      })
    }
  }

  return (
    <article
      className={`salad-item ${
        isActive ? '' : 'salad-item_disabled'
      } ${className}`}
    >
      <h3 className="salad-item__title">{salad.title}</h3>
      <ul className="icons">
        {salad.composition?.map((molecule) => {
          const [currentMolecule] = molecules.filter((m) => m._id === molecule)
          return (
            <li className="icons__item" key={currentMolecule._id}>
              <MoleculeIcon
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
