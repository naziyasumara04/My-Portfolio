import "./index.css";
import "./navbar.css";
export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-lg container-md">
          <div className="d-none d-md-block " id="navv">
            <a className="navbar-brand custom-hover-effect ml-5" href="#home">
              Home
            </a>
            <a className="navbar-brand custom-hover-effect" href="#about">
              About me
            </a>
            <a className="navbar-brand custom-hover-effect" href="#skill">
              Skills
            </a>
            <a className="navbar-brand custom-hover-effect" href="#project">
              Projects
            </a>
            <a className="navbar-brand custom-hover-effect" href="#contact">
              Contact
            </a>
          </div>
          <div container="container-sm">
            <button
              className="navbar-toggler d-block d-md-none"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>
          <div
            className="collapse navbar-collapse "
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item custom-hover-effect">
                <a className="nav-link active" aria-current="page" href="#home">
                  Home
                </a>
              </li>
              <li className="nav-item custom-hover-effect">
                <a className="nav-link" href="#about">
                  About me
                </a>
              </li>
              <li className="nav-item custom-hover-effect">
                <a className="nav-link" href="#skill">
                  Skills
                </a>
              </li>
              <li className="nav-item custom-hover-effect">
                <a className="nav-link" href="#project">
                  Projects
                </a>
              </li>
              <li className="nav-item custom-hover-effect">
                <a className="nav-link" href="#contact">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
