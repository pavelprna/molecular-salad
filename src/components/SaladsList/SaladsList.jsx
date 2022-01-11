import { SaladItem } from '../SaladItem/SaladItem'

export const SaladsList = ({ items, title }) => {
  return (
    <>
      <h2>{title}</h2>
      <ul>
        {items.map((item) => (
          <li key={item._id}>
            <SaladItem salad={item} />
          </li>
        ))}
      </ul>
    </>
  )
}
