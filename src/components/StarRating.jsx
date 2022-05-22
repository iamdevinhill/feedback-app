import React, { useState } from 'react'
import { useContext } from 'react'
import FeedbackContext from '../context/FeedbackContext'

export const StarRating = ({ feedbackItem }) => {
  const { updateFeedback } = useContext(FeedbackContext)

  const [rating, setRating] = useState(feedbackItem.stars)
  const [hover, setHover] = useState(0)

  const updateStarRating = (index) => {
    setRating(index)
    updateFeedback(feedbackItem.id, {
      ...feedbackItem,
      stars: index,
    })
  }

  return (
    <div className='star-rating'>
      {[...Array(5)].map((star, index) => {
        index += 1
        return (
          <button
            type='button'
            key={index}
            className={index <= (hover || rating) ? 'on' : 'off'}
            onClick={() => updateStarRating(index)}
            onMouseEnter={() => setHover(index)}
            onMouseLeave={() => setHover(rating)}
          >
            <span className='star'>&#9733;</span>
          </button>
        )
      })}
    </div>
  )
}
