import { makeAutoObservable } from 'mobx'

class Books {
  constructor() {
    makeAutoObservable(this)
  }
  addNewBook() {}
  getAllBooks() {}
}
export default new Books()
