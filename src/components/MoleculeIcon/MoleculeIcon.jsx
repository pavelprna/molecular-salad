import './MoleculeIcon.css'

export const MoleculeIcon = ({ image, title, large = false }) => {
  return (
    <img
      src={`http://test-job.webatom.ru${image}`}
      alt={title}
      className={`molecule-icon ${large ? 'molecule-icon_size_large' : ''}`}
      onError={(e) => {
        e.currentTarget.src =
          'https://s-konto.ru/local/templates/main/images/no-photo.jpg'
      }}
    />
  )
}
