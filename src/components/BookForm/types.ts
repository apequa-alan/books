import { BookPayload } from '../../store/Library/types'

export enum Mode {
  EDIT = 'edit',
  CREATE = 'create'
}
export interface IBookForm {
  mode: Mode
  action: (payload: BookPayload) => void
  defaultBook?: BookPayload
}
