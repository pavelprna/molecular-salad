import { SaladItem } from '../SaladItem/SaladItem'
import './SaladsList.css'

export const SaladsList = ({ items, title }) => {
  return (
    <section className="section salads">
      <h2 className="section__title salads__title">{title}</h2>
      <ul className="section__list salads__list">
        {items.map((item) => (
          <li key={item._id} className="salads__item">
            <SaladItem salad={item} />
          </li>
        ))}
      </ul>
    </section>
  )
}
