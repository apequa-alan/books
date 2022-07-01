import { observer } from 'mobx-react-lite'
import { Link } from 'react-router-dom'
import Library from '../../store/Library/Library'
import { BookItem } from './BookItem/BookItem'

export const Main = observer(() => {
  const booksList = Library.allBooks.map(book => <BookItem key={book.id} book={book} />)

  return (
    <main>
      <section className="py-4 text-center container">
        <div className="row">
          <div className="col-lg-6 col-md-8 mx-auto">
            <h1 className="fw-light">Список книг</h1>
            <p className="lead text-muted">Здесь вы можете посмотреть список всех книг</p>
            <p>
              <Link className="btn btn-secondary my-2" to="/new-book">
                Добавить книгу
              </Link>
            </p>
          </div>
        </div>
      </section>

      <div className="album py-5 bg-light">
        <div className="container">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">{booksList}</div>
        </div>
      </div>
    </main>
  )
})
