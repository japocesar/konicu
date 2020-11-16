import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom';
import konicu from "../../../assets/konicu.png";

import './navbar.scss';

export const Navbar = () => {
    const [expanded, setExpanded] = useState(false);

    const handleExpand = () => setExpanded(!expanded);

    return (
        <nav className={`navbar navbar-expand-sm navbar-dark bg-dark ${ expanded ? 'expanded' : '' }`}>
            <Link className="navbar-brand" to="/">
                <img className="mr-2" src={ konicu } alt="Konicu" style={{ maxHeight: "40px" }} />
                Konicú
            </Link>
            <button onClick={ handleExpand } className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
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
                            Tema del Mes
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink
                            activeClassName="active" 
                            className="nav-link" 
                            exact
                            to="/soy-su-fan"
                        >
                            Soy su Fan
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink
                            activeClassName="active" 
                            className="nav-link" 
                            exact
                            to="/expresate"
                        >
                            Exprésate
                        </NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
