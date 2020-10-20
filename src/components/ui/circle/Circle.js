import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './circle.scss';

export const Circle = ( { texto, color, clase, icono } ) => {
    return (
        <div 
            className={ `circle col-2 animate__animated ${ clase + ' ' + (color || '') } `}
        >
            <div className="circle__inner justify-content-center">
                <div className="col-12 circle-icon">
                    <FontAwesomeIcon icon={icono} size={ (color) ? '2x' : '5x' } />
                </div>
                <div className={`circle-text ${color}`}>{ texto }</div>
            </div>
        </div>
    )
}
