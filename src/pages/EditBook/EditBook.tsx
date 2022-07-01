import { FC, useEffect, useState } from 'react'
import { useParams } from 'react-router'

import LibraryStore from '../../store/Library/Library'
import { BookPayload, IBook } from '../../store/Library/types'
import Library from '../../store/Library/Library'
import { BookForm } from '../../components/BookForm/BookForm'
import { Mode } from '../../components/BookForm/types'

export const EditBook: FC = () => {
  const params = useParams<{ id: string }>()
  const [book, setBook] = useState<IBook | undefined>(undefined)

  useEffect(() => {
    setBook(Library.getBook(Number(params.id)))
  }, [])

  const handleUpdateBook = (bookPayload: BookPayload) => LibraryStore.updateBook(Number(params.id), bookPayload)
  return (
    <div className="container">
      <div className="py-4 text-center">
        <h2>
          Обновить информацию по книге <b>{book?.name}</b>
        </h2>
      </div>
      <BookForm mode={Mode.EDIT} action={handleUpdateBook} defaultBook={book} />
    </div>
  )
}
