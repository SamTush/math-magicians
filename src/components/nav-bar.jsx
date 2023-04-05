import './nav-bar.scss';

const NavBar = () => (
  <nav className="navbar navbar-expand-lg bg-body-tertiary ps-5 pe-5">
    <div className="container-fluid">
      <a className="navbar-brand" href="about">
        math
        <span>
          magicians
        </span>
      </a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse d-flex justify-content-end" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="about">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="about">Calculator</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="about">Quote</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);

export default NavBar;
