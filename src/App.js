import { useEffect } from 'react'
import { moleculesApi } from './utils/MoleculesApi'

function App() {
  useEffect(() => {
    moleculesApi.getList().then((list) => console.log(list.result))
  }, [])
  return <></>
}

export default App
