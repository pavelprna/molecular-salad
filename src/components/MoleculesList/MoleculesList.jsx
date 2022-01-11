import { MoleculeItem } from '../MoleculeItem/MoleculeItem'

export const MoleculesList = ({ title, items }) => {
  return (
    <section className="salads">
      <h2 className="salads__title">{title}</h2>
      <ul className="salads__list">
        {items.map((item) => (
          <li key={item._id} className="salads__item">
            <MoleculeItem molecule={item} />
          </li>
        ))}
      </ul>
    </section>
  )
}
