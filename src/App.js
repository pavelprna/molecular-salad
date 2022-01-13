import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { SaladsList } from './components/SaladsList/SaladsList'
import { MoleculesList } from './components/MoleculesList/MoleculesList'
import { fetchMolecules } from './redux/moleculeSlice'
import { fetchSalads } from './redux/saladSlice'
import { SaladItem } from './components/SaladItem/SaladItem'

function App() {
  const dispatch = useDispatch()
  const molecules = useSelector((state) => state.molecules.result)
  const salads = useSelector((state) => state.salads.result)
  const customSalad = useSelector((state) => state.customSalad)
  const order = useSelector((state) => state.order.molecules)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    Promise.all([dispatch(fetchMolecules()), dispatch(fetchSalads())]).then(
      () => setIsLoaded(true)
    )
  }, [dispatch])

  return isLoaded ? (
    <>
      {order.map((molecule) => (
        <p>
          {molecule.id}: {molecule.qty}
        </p>
      ))}
      <SaladsList items={salads} title="Choose a ready-made salad 👨‍🍳" />
      <SaladItem salad={customSalad} />
      <MoleculesList items={molecules} title="or create your own! ✨" />
    </>
  ) : (
    'loading'
  )
}

export default App
