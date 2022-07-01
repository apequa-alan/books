import { FC } from 'react'

import { BookForm } from '../../components/BookForm/BookForm'
import LibraryStore from '../../store/Library/Library'
import { Mode } from '../../components/BookForm/types'
import { BookPayload } from '../../store/Library/types'

export const AddBook: FC = () => {
  const handleAddBook = (book: BookPayload) => LibraryStore.addBook(book)
  return (
    <div className="container">
      <div className="py-4 text-center">
        <h2>Добавление книги </h2>
        <p className="lead">На данной странице вы можете добавить новую книгу</p>
      </div>
      <BookForm mode={Mode.CREATE} action={handleAddBook} />
    </div>
  )
}
