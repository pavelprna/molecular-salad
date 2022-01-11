import './MoleculeIcon.css'

export const MoleculeIcon = ({ image, title }) => {
  return (
    <img
      src={`http://test-job.webatom.ru${image}`}
      alt={title}
      className="molecule-icon"
      onError={(e) => {
        e.currentTarget.src =
          'https://s-konto.ru/local/templates/main/images/no-photo.jpg'
      }}
    />
  )
}
