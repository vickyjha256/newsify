import React from 'react'
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  let location = useLocation();
  return (
    // style={{pointerEvents: 'none'}}
    <div>
      <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
        {/* <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}> */}

        <div className="container-fluid">
          <Link className="navbar-brand" to="/"><b>Newsify</b></Link>
          
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className='navbar-toggler-icon'></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item"> <Link className={`nav-link ${location.pathname === '/' ? "active" : ""}`} aria-current="page" to="/">Home</Link> </li>
              <li className="nav-item"> <Link className={`nav-link ${location.pathname === '/technology' ? "active" : ""}`} to="/technology">Technology</Link> </li>
              <li className="nav-item"> <Link className={`nav-link ${location.pathname === '/sports' ? "active" : ""}`} to="/sports">Sports</Link> </li>
              <li className="nav-item"> <Link className={`nav-link ${location.pathname === '/entertainment' ? "active" : ""}`} to="/entertainment">Entertainment</Link> </li>
              <li className="nav-item"> <Link className={`nav-link ${location.pathname === '/business' ? "active" : ""}`} to="/business">Business</Link> </li>
              <li className="nav-item"> <Link className={`nav-link ${location.pathname === '/health' ? "active" : ""}`} to="/health">Health</Link> </li>
              <li className="nav-item"> <Link className={`nav-link ${location.pathname === '/science' ? "active" : ""}`} to="/science">Science</Link> </li>
            </ul>
            {/* <form className="d-flex">
                <input className="form-control me-2" type="search" placeholder="Type to Search" aria-label="Search" />
                <button className="btn btn-outline-primary" type="submit">Search</button>
              </form> */}

            {/* <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'}`}>
              <input className="form-check-input" onClick={props.toggleMode} type="checkbox" id="flexSwitchCheckDefault" />
              <label className="form-check-label" htmlFor="flexSwitchCheckDefault"><b>Enable {props.mode === 'light' ? 'Dark' : 'Light'} Mode</b> </label>
            </div> */}

          </div>
        </div>

      </nav>
    </div>
  )
}
export default Navbar;