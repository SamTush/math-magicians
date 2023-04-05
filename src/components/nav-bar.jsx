import { Link } from 'react-router-dom';
import './nav-bar.scss';

const NavBar = () => (
  <nav className="navbar navbar-expand-lg bg-body-tertiary ps-5 pe-5">
    <div className="container-fluid">
      <a className="navbar-brand" to="/">
        math
        <span>
          magicians
        </span>
      </a>
      <div className="navbar-collapse d-flex justify-content-end" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" aria-current="page" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/calculator">Calculator</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/quotes">Quote</Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);

export default NavBar;
