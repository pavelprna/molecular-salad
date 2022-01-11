import { useState } from 'react'
import { MoleculeIcon } from '../MoleculeIcon/MoleculeIcon'

export const MoleculeItem = ({ molecule }) => {
  const available = (qty) => (!qty ? 'Out of stock :(' : `Available: ${qty}`)
  return (
    <article
      className={`salad-item ${!!molecule.qty ? '' : 'salad-item_disabled'}`}
    >
      <h3 className="salad-item__title">{molecule.title}</h3>
      <MoleculeIcon
        image={molecule.image}
        title={molecule.title}
        large={true}
      />
      <p className="salad-item__available">{available(molecule.qty)}</p>
    </article>
  )
}
