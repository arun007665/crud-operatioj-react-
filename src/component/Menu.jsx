import React from 'react'
import { NavLink } from 'react-router-dom'

function Menu() {
  return (
    <header>
        <nav className="navbar navbar-expand-md navbar-dark bg-primary">
            <div className="container">
                <NavLink  to={`/`} className="nav-link">React-Crud-Local-Storage</NavLink>
                <button className="btn btn-dark" data-bs-toggle="offcanvas" data-bs-target="#menu">
                    <span className="navbar-toggler-icon"></span>
                </button>
                
                
            </div>
        </nav>

        <div className="offcanvas offcanvas-end" tabIndex={'-1'} id='menu'>
            <div className="offcanvas-header">
                <h5 className="offcanvas-title">React-crud-local-storage</h5>
                <button className="btn-close" data-bs-dismiss="offcanvas"></button>
            </div>

            <div className="offcanvas-body d-flex justify-content-center">
                <ul className=" nav nav-pills flex-column">
                    <li className="nav-item">
                        <NavLink to={`/`} className="nav-link mt-3">Home</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to={`/about`} className="nav-link mt-3">Create</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to={`/update`} className="nav-link mt-3">update</NavLink>
                    </li>
                </ul>
            </div>
        </div>
    </header>
  )
}

export default Menu
