import { useEffect, useState } from 'react'
import { MoleculeIcon } from '../MoleculeIcon/MoleculeIcon'
import { removeMolecule } from '../../redux/moleculeSlice'
import { useDispatch } from 'react-redux'

export const MoleculeItem = ({ molecule }) => {
  const available = (qty) => (!qty ? 'Out of stock :(' : `Available: ${qty}`)
  const dispatch = useDispatch()
  const [isActive, setIsActive] = useState(true)

  useEffect(() => {
    if (molecule.qty < 1) {
      setIsActive(false)
    }
  }, [molecule.qty])

  const handleClick = () => dispatch(removeMolecule({ _id: molecule._id }))

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
