import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { SaladsList } from './components/SaladsList/SaladsList'
import { MoleculesList } from './components/MoleculesList/MoleculesList'
import { fetchMolecules } from './redux/moleculeSlice'
import { fetchSalads } from './redux/saladSlice'
import { Order } from './components/Order/Order'

function App() {
  const dispatch = useDispatch()
  const molecules = useSelector((state) => state.molecules.result)
  const salads = useSelector((state) => state.salads.result)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    Promise.all([dispatch(fetchMolecules()), dispatch(fetchSalads())]).then(
      () => setIsLoaded(true)
    )
  }, [dispatch])

  return isLoaded ? (
    <>
      <header className="section header">
        <h1 className="header__title">Molecular Salad</h1>
        <Order />
      </header>
      <SaladsList items={salads} title="Choose a ready-made salad 👨‍🍳" />
      <MoleculesList items={molecules} title="or create your own! ✨" />
    </>
  ) : (
    'loading'
  )
}

export default App
