import { FC, useEffect } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import cn from 'classnames'
import { useNavigate } from 'react-router'

import { BookPayload } from '../../store/Library/types'
import { IBookForm, Mode } from './types'

export const BookForm: FC<IBookForm> = ({ mode, action, defaultBook }) => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors }
  } = useForm<BookPayload>()
  const navigate = useNavigate()

  const onSubmit: SubmitHandler<BookPayload> = data => {
    action(data)
    navigate('/')
  }

  const uploadValuesInState = () => {
    if (defaultBook) {
      setValue('name', defaultBook.name)
      setValue('desc', defaultBook.desc)
      setValue('author', defaultBook.author)
      setValue('publisher', defaultBook.publisher)
      setValue('produceDate', defaultBook.produceDate)
      setValue('isbn', defaultBook.isbn)
      setValue('pageNumber', defaultBook.pageNumber)
      setValue('attach', defaultBook.attach)
    }
  }
  useEffect(() => {
    uploadValuesInState()
  }, [defaultBook])


  return (
    <div className="row g-5">
      <h4>Информация по книге</h4>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="row g-3">
          <div className="col-12">
            <label htmlFor="name" className="form-label">
              Название
            </label>
            <input
              className={cn('form-control', { 'is-invalid': !!errors.name })}
              id="name"
              {...register('name', { required: true })}
            />
            <div className="invalid-feedback">Заполните поле</div>
          </div>

          <div className="col-12">
            <label htmlFor="pageNumber" className="form-label">
              Обложка клиги (ссылка) <span className="text-muted">(Optional)</span>
            </label>
            <input
              className="form-control"
              id="pageNumber"
              {...register('attach')}
            />
          </div>

          <div className="col-12">
            <label htmlFor="desc" className="form-label">
              Описание
            </label>
            <input
              className={cn('form-control', { 'is-invalid': !!errors.desc })}
              id="desc"
              {...register('desc', { required: true })}
            />
            <div className="invalid-feedback">Заполните поле</div>
          </div>

          <div className="col-12">
            <label htmlFor="author" className="form-label">
              Автор
            </label>
            <input
              className={cn('form-control', { 'is-invalid': !!errors.author })}
              id="author"
              {...register('author', { required: true })}
            />
            <div className="invalid-feedback">Заполните поле</div>
          </div>

          <div className="col-12">
            <label htmlFor="isbn" className="form-label">
              ISBN
            </label>
            <input
              className={cn('form-control', { 'is-invalid': !!errors.isbn })}
              id="isbn"
              {...register('isbn', { required: true })}
            />
            <div className="invalid-feedback">Заполните поле</div>
          </div>

          <div className="col-12">
            <label htmlFor="publisher" className="form-label">
              Издательство
            </label>
            <input
              className={cn('form-control', { 'is-invalid': !!errors.publisher })}
              id="publisher"
              {...register('publisher', { required: true })}
            />
            <div className="invalid-feedback">Заполните поле</div>
          </div>

          <div className="col-12">
            <label htmlFor="produceDate" className="form-label">
              Дата издания
            </label>
            <input
              className={cn('form-control', { 'is-invalid': !!errors.produceDate })}
              id="produceDate"
              {...register('produceDate', { required: true })}
            />
            <div className="invalid-feedback">Заполните поле</div>
          </div>

          <div className="col-12">
            <label htmlFor="pageNumber" className="form-label">
              Количество страниц <span className="text-muted">(Optional)</span>
            </label>
            <input
              className="form-control"
              id="pageNumber"
              {...register('pageNumber')}
            />
          </div>
          <hr className="my-4" />
          <button className="w-100 btn btn-primary btn-lg" type="submit">
            {mode === Mode.CREATE ? 'Добавить' : 'Обновить'}
          </button>
        </div>
      </form>
    </div>
  )
}
