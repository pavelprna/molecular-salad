import { useEffect, useState } from 'react'
import { MoleculeIcon } from '../MoleculeIcon/MoleculeIcon'
import { addMolecule } from '../../redux/customSaladSlice'
import { useDispatch } from 'react-redux'

export const MoleculeItem = ({ molecule }) => {
  const dispatch = useDispatch()
  const [isActive, setIsActive] = useState(true)

  useEffect(() => {
    if (molecule.qty < 1) {
      setIsActive(false)
    }
  }, [molecule.qty])

  const handleClick = () => {
    if (isActive) {
      dispatch(addMolecule({ _id: molecule._id }))
    }
  }

  const available = (qty) => (!qty ? 'Out of stock :(' : `Available: ${qty}`)

  return (
    <article
      className={`salad-item ${isActive ? '' : 'salad-item_disabled'}`}
      onClick={handleClick}
    >
      <h3 className="salad-item__title">{molecule.title}</h3>
      <MoleculeIcon
        image={molecule.image}
        title={molecule.title}
        large={true}
      />
      <p className="salad-item__available">{available(molecule.qty)}</p>
    </article>
  )
}
