import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { Circle } from '../circle/Circle';
import { Link } from 'react-router-dom';
import './card.scss';

export const Card = ( { titulo, descripcion, clase, icono, link } ) => {
    return (
        <div key={ titulo } className="card">
            <Circle clase={clase} icono={icono} />
            <div className="card-body">
                <h5 className="card-title"> { titulo } </h5>
                <p className="card-text"> { descripcion } </p>
            </div>
            <Link className="btn btn-outline-success" to={ link }>
                Ir
                <FontAwesomeIcon icon={faChevronRight} style={{ marginLeft:"10px" }} />
            </Link>
        </div>
)
}
