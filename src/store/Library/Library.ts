import { makeAutoObservable } from 'mobx'

import { IUserNote, IBook, BookPayload, IAdvancedBook, IReview } from './types'
import { booksInitialValue } from './consts'

class Library {
  books: IBook[] = booksInitialValue
  reviews: IReview[] = []
  notes: IUserNote[] = []

  constructor() {
    makeAutoObservable(this, {}, { deep: true })
  }

  addBook(bookPayload: BookPayload) {
    const maxId = Math.max(...this.books.map(item => item.id))
    if (maxId) {
      this.books.push({ ...bookPayload, id: maxId + 1 })
    } else {
      this.books.push({ ...bookPayload, id: 0 })
    }
  }
  updateBook(bookId: number, bookPayload: BookPayload) {
    this.books = this.books.map(book => (book.id === bookId ? { ...book, ...bookPayload } : book))
  }

  addReview(review: IReview) {
    this.reviews.push(review)
  }

  addNote(note: IUserNote) {
    this.notes.push(note)
  }

  getBook(bookId: number) {
    return this.books.find(book => book.id === bookId)
  }
  get allBooks(): IAdvancedBook[] {
    return this.books.map(book => {
      const bookReviews = this.reviews.filter(review => review.bookId === book.id)
      const userNotesForBook = this.notes.filter(item => item.bookId === book.id)
      return { ...book, reviews: bookReviews, userNotes: userNotesForBook }
    })
  }
}
export default new Library()
