import React from "react";

function Header() {
  return (
    <header>
      <nav className="navbar navbar-expand-xl navbar-dark ">
        <a className="navbar-brand" href="#">
          takeNotes
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo01"
          aria-controls="navbarTogglerDemo01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
          <ul className="navbar-nav mb-2 mb-lg-0 ms-auto">
            <li className="nav-item">
              <a className="nav-link active" href="/contact">
                Contact
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="/login">
                Login
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;
