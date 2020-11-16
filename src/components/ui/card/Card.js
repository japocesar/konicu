import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Circle } from '../circle/Circle';
import { Link } from 'react-router-dom';
import './card.scss';

export const Card = ( { titulo, descripcion, clase, icono, link, subiconos, lista } ) => {
    return (
        <div key={ titulo } className="card">
            <Circle clase={clase} icono={icono} />
            <div className="card-body">
                <h5 className="card-title"> { titulo } </h5>
                <p className="card-text"> { descripcion } </p>
                
                <div className="icons-container">
                    { ( subiconos ) && subiconos.map( i => (
                        <a href={ i.link } target="blank" key={ i.nombre }>
                            <FontAwesomeIcon icon={ i.icono } size="2x" />
                        </a>
                    )) }
                </div>

            </div>
            { ( link ) && (
                <Link className="btn btn-outline-success" to={ link }>
                 Ir
             </Link>
            ) }
        </div>
)
}
