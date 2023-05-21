import { useNavigate } from 'react-router-dom'
import { ReactComponent as BackButtonIcon } from 'assets/icons/back-arrow.svg'

export default function BackButton() {
  const navigate = useNavigate()

  const handleBackRoute = () => {
    navigate(-1)
  }

  return (
    <div className='back-button' onClick={handleBackRoute}>
      <BackButtonIcon />
      <span>Go back</span>
    </div>
  )
}
