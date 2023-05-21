import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import useAxios from 'hooks/useAxios'
import type { IReviews } from 'types'
import NewReviewInput from './newReviewInput'

export default function Reviews() {
  const { id: productID } = useParams()
  const { fetchData, data: comments = [] } = useAxios<IReviews>({
    apiName: 'getReviews',
    lazyFetch: true,
  })

  useEffect(() => {
    fetchData<string>(productID)
  }, [productID])

  return (
    <div>
      <NewReviewInput />
      <div className='comments'>
        {comments.map(({ id, text, rate, createdBy, createdAt }) => {
          return (
            <div key={id} className='comment-block'>
              <h4>{createdBy.username}</h4>
              <small>{`Date: ${createdAt}`}</small>
              <small>{`Rate: ${rate}`}</small>
              <p>{text}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}
