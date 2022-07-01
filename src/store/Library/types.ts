export interface IReview {
  bookId: number
  author: string
  text: string
  createDate: string
}
export interface IUserNote {
  bookId: number
  text: string
  createDate: string
}
export interface IBook {
  id: number
  name: string
  desc: string
  author: string
  publisher: string
  produceDate: string
  isbn: string
  pageNumber?: string
  attach?: string
}
export type BookPayload = Omit<IBook, 'id'>

export interface IAdvancedBook extends IBook {
  rating?: string
  reviews?: IReview[]
  userNotes?: IUserNote[]
}
