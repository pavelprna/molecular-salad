import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { clearOrder, makeOrder } from '../../redux/orderSlice'
import { MoleculeIcon } from '../MoleculeIcon/MoleculeIcon'
import './Order.css'

export const Order = () => {
  const order = useSelector((state) => state.order.molecules)
  const dispatch = useDispatch()
  const [notification, setNotification] = useState('')

  useEffect(() => {
    if (notification) {
      setTimeout(() => {
        setNotification('')
      }, 1000)
    }
  }, [notification])

  const handleClick = () => {
    dispatch(makeOrder()).then(({ payload }) => {
      if (payload.success) {
        setNotification(payload.result)
        dispatch(clearOrder())
      }
    })
  }

  if (!order.length) return <p>{notification}</p>

  return (
    <div className="order">
      <h2 className="order__title">Your order:</h2>
      <ul className="order__list">
        {order.map((molecule) => (
          <li className="order__item" key={molecule._id}>
            <div className="order__icon">
              <div className="order__qty">{molecule.qty}</div>
              <MoleculeIcon image={molecule.image} title={molecule.title} />
            </div>
          </li>
        ))}
      </ul>
      {!!order.length && <button onClick={handleClick}>Make Order!</button>}
    </div>
  )
}
