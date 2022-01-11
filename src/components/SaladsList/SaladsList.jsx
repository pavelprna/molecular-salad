import { SaladItem } from '../SaladItem/SaladItem'
import './SaladsList.css'

export const SaladsList = ({ items, title }) => {
  return (
    <section className="salads">
      <h2 className="salads__title">{title}</h2>
      <ul className="salads__list">
        {items.map((item) => (
          <li key={item._id} className="salads__item">
            <SaladItem salad={item} />
          </li>
        ))}
      </ul>
    </section>
  )
}
