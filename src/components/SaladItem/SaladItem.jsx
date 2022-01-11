import { useSelector } from 'react-redux'

export const SaladItem = ({ salad }) => {
  const molecules = useSelector((state) => state.molecules.result)

  return (
    <article>
      <h3>{salad.title}</h3>
      {salad.composition?.map((molecule) => {
        const [currentMolecule] = molecules.filter((m) => m._id === molecule)
        console.log(currentMolecule)
        return currentMolecule._id
      })}
    </article>
  )
}
