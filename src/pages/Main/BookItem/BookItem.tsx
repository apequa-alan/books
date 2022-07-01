import { FC } from 'react'
import cn from 'classnames'

import { IAdvancedBook } from '../../../store/Library/types'
import styles from './BookItem.module.css'
import { useNavigate } from 'react-router'

export const BookItem: FC<{ book: IAdvancedBook }> = ({ book }) => {
  const navigate = useNavigate()
  const handleRouteOnEdit = () => {
    navigate(`/edit-book/${book.id}`)
  }

  const defaultImage = (
      <svg
          className="bd-placeholder-img card-img-top"
          width="100%"
          height="225"
          xmlns="http://www.w3.org/2000/svg"
          role="img"
          aria-label="Placeholder: Thumbnail"
          preserveAspectRatio="xMidYMid slice"
          focusable="false"
      >
        <title>title</title>
        <rect width="100%" height="100%" fill="#55595c"></rect>
        <text x="50%" y="50%" fill="#eceeef" dy=".3em">
          Нет изображения
        </text>
      </svg>
  )
  return (
    <div className="col">
      <div className="card shadow-sm">
        {book.attach ? (
          <img
            className="bd-placeholder-img card-img-top"
            width="100%"
            height="225"
            src={book.attach}
            alt={book.name}
          />
        ) : (
          defaultImage
        )}
        <div className="card-body">
          <p className="card-text my-0">
            Название: <b>{book.name}</b>
          </p>
          <p className="card-text my-0">Рейтинг: {book.rating ? <b>{book.rating}</b> : 'нет оценок'}</p>

          <p className={cn('card-text', 'mt-1', styles.BookDesc)}>{book.desc}</p>
          <div className="d-flex justify-content-between align-items-center">
            <div className="btn-group">
              <button type="button" disabled className="btn btn-sm btn-outline-secondary">
                View
              </button>
              <button type="button" className="btn btn-sm btn-outline-secondary" onClick={handleRouteOnEdit}>
                Edit
              </button>
            </div>
            <small className="text-muted">Год издания: {book.produceDate}</small>
          </div>
        </div>
      </div>
    </div>
  )
}
