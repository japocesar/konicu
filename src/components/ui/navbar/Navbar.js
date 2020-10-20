import React from 'react'
import { Link, NavLink } from 'react-router-dom';

import './navbar.scss';

export const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            <Link className="navbar-brand" to="/">
                Konicú
            </Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                    <li className="nav-item">
                        <NavLink
                            activeClassName="active"
                            className="nav-link"
                            exact
                            to="/"
                        >
                            Inicio
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink
                            activeClassName="active" 
                            className="nav-link" 
                            exact
                            to="/tema-del-mes"
                        >
                            Tema de Mes
                        </NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
