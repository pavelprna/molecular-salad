import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchMolecules } from './redux/moleculeSlice'

function App() {
  const dispatch = useDispatch()
  const molecules = useSelector((state) => state.molecules.result)

  useEffect(() => {
    dispatch(fetchMolecules())
  }, [dispatch])

  return (
    <>
      {molecules.map((molecule) => (
        <div key={molecule._id}>
          <p>{molecule.title}</p>
          <p>{molecule.qty}</p>
          <img
            src={`http://test-job.webatom.ru${molecule.image}`}
            alt={molecule.title}
          />
        </div>
      ))}
    </>
  )
}

export default App
