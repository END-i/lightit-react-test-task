import { useState } from 'react'
import { ReactComponent as StarIcon } from 'assets/icons/star.svg'

const defaultReview = {
  text: '',
  rate: 0,
}
export default function NewReviewInput() {
  const [comment, setReview] = useState(defaultReview)

  const handleChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    setReview((prev) => ({ ...prev, text: target.value }))
  }

  return (
    <div>
      <div>
        <input type='text' value={comment.text} onChange={handleChange} />
        <button>Send</button>
      </div>
      <div style={{ display: 'flex', width: 'fit-content' }}>
        {Array.from(Array(5).keys()).map((idx) => (
          <StarIcon
            key={idx}
            style={{ fill: 'red', stroke: 'blue', strokeWidth: 20, height: 30, width: 30 }}
          />
        ))}
      </div>
    </div>
  )
}
