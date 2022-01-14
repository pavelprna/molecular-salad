import { MoleculeItem } from '../MoleculeItem/MoleculeItem'
import { useSelector } from 'react-redux'
import { SaladItem } from '../SaladItem/SaladItem'
import './MoleculesList.css'

export const MoleculesList = ({ title, items }) => {
  const customSalad = useSelector((state) => state.customSalad)

  return (
    <section className="section molecules">
      <h2 className="section__title molecules__title">{title}</h2>
      <ul className="section__list molecules__list">
        {items.map((item) => (
          <li key={item._id} className="salads__item">
            <MoleculeItem molecule={item} />
          </li>
        ))}
      </ul>
      <SaladItem salad={customSalad} className="salads__item_type_custom" />
    </section>
  )
}
