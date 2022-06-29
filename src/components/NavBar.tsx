import { FC } from 'react'
import { Link } from 'react-router-dom'

export const NavBar: FC = () => {
  return (
    <header>
      <div className="navbar navbar-dark bg-dark shadow-sm">
        <div className="container">
          <Link className="navbar-brand" to="/">
            Main
          </Link>
          <Link className="navbar-brand" to="/new-book">
            Add book
          </Link>
        </div>
      </div>
    </header>
  )
}
