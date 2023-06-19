import { Link } from 'react-router-dom'
import './Header.scss'
const Header = () => {
  return (
    <header>
      <div>
        <Link to={'/'} className="header-link" href="#">
          Volkov Dmitriy
        </Link>
      </div>
      <nav>
        <ul>
          <li>
            <Link to={'/'} className="header-link hover" href="#">
              Main
            </Link>
          </li>
          <li>
            <Link to={'/project'} className="header-link hover" href="#">
              Project
            </Link>
          </li>
          <li>
            <Link to={'/contact'} className="header-link hover" href="#">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
